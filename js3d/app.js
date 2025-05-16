// الكتب الأصلية (ثابتة)
const originalBooks = [
  {
    title: "The help",
    author: "Kathryn Stockett",
    description: "Master JavaScript from the basics to advanced concepts with hands-on examples.",
    image: "img/js3d.jpg"
  },
  {
    title: "Murder on family grounds",
    author: "Susan Rowland",
    description: "An exciting mystery that dives into the unknown world of dark secrets.",
    image: "img/12d0afec49bbf039a3c6913bf762ecb9.jpg"
  },
  {
    title: "Her favorite color was yellow",
    author: "Edgar Holmes",
    description: "A romantic journey that spans across cities and generations.",
    image: "img/2d85b14b1a846315f97b5e4578c3ef51.jpg"
  },
  {
    title: "Just love HER",
    author: "Raz Mihal",
    description: "Explore the depths of human emotions in this dramatic and heartfelt story.",
    image: "img/71AYChRKzBL._AC_UF350,350_QL50_.jpg"
  },
  {
    title: "Rot & ruin",
    author: "Jonathan Maberry",
    description: "A historical fiction novel that takes you back to ancient civilizations.",
    image: "img/7a935d5a91f7e467a9d28b5c34f19f02.jpg"
  },
  {
    title: "Memoirs of a Geisha",
    author: "Unknown",
    description: "A science fiction adventure through galaxies and alien worlds.",
    image: "img/8171410882fc2be4c2f3a5b103de9b0c.jpg"
  },
  {
    title: "Ruby",
    author: "V.C.Andrews",
    description: "A powerful self-help book that inspires motivation and personal growth.",
    image: "img/d1f5a7ff3ec6725a42c80491e8b83833.jpg"
  }
];

// المتغيرات الديناميكية (محفوظة في localStorage و مدموجة)
let storedBooks = JSON.parse(localStorage.getItem('allBooks')) || [];
let books = [];

// دالة لتحديث قائمة الكتب من localStorage ودمجها مع الكتب الأصلية
function updateBooks() {
  storedBooks = JSON.parse(localStorage.getItem('allBooks')) || [];
  const deletedOriginals = JSON.parse(localStorage.getItem('deletedOriginals')) || [];
  
  books = [
    ...originalBooks.filter(book => !deletedOriginals.includes(book.image)),
    ...storedBooks
  ];
}

let slider = document.querySelector('.slider');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let active = 3;
let items = [];
function deleteBook(bookToDelete) {
  // حذف من الكتب المخزنة (إن كان من الكتب المضافة)
  storedBooks = storedBooks.filter(book => book.image !== bookToDelete.image);
  localStorage.setItem('allBooks', JSON.stringify(storedBooks));
  
  // حذف من قائمة المفضلة
  let myBookList = JSON.parse(localStorage.getItem('myBookList')) || [];
  myBookList = myBookList.filter(book => book.image !== bookToDelete.image);
  localStorage.setItem('myBookList', JSON.stringify(myBookList));
  
  // إذا كان من الكتب الأصلية، نضيفه لقائمة الكتب المحذوفة
  const isOriginal = originalBooks.some(b => b.image === bookToDelete.image);
  if (isOriginal) {
    let deletedOriginals = JSON.parse(localStorage.getItem('deletedOriginals')) || [];
    if (!deletedOriginals.includes(bookToDelete.image)) {
      deletedOriginals.push(bookToDelete.image);
      localStorage.setItem('deletedOriginals', JSON.stringify(deletedOriginals));
    }
  }
  
  return true;
}
function renderSlider(booksToShow = books, isSearch = false) {
  slider.innerHTML = '';

  // لو ماكانش كتب نهائيًا
  if (books.length === 0) {
  slider.innerHTML = `
    <div class="empty-state">
      <img src="img/bookshelf.png" alt="Empty bookshelf">
      <h3>No books available!</h3>
      <p>Would you like to add some books to your collection?</p>
      <div class="buttons">
        <button onclick="window.location.href='add.html'">Add Books</button>
      </div>
    </div>
  `;


    document.getElementById('addYesBtn').onclick = () => {
      window.location.href = 'add.html';
    };
    document.getElementById('addNoBtn').onclick = () => {
      document.querySelector('.empty-popup').style.display = 'none';
    };

    return;
  }

  // لو البحث ما رجعش نتيجة
  if (booksToShow.length === 0 && isSearch) {
    slider.innerHTML = `
      <div class="empty-popup">
        <p>This book is not available.<br>Do you want to add it?</p>
        <div class="popup-buttons">
          <button class="popup-btn" id="addYesBtn">Yes</button>
          <button class="popup-btn cancel" id="addNoBtn">No</button>
        </div>
      </div>
    `;

    document.getElementById('addYesBtn').onclick = () => {
      window.location.href = 'add.html';
    };
    document.getElementById('addNoBtn').onclick = () => {
      window.location.href = 'index.html';
    };

    return;
  }

  // ضبط active لكي لا يتجاوز عدد الكتب
  active = Math.min(active, booksToShow.length - 1);
  active = Math.max(active, 0);

  // عرض الكتب
  booksToShow.forEach(book => {
    let div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `<img src="${book.image}" alt="${book.title}">`;
    slider.appendChild(div);
  });

  items = document.querySelectorAll('.slider .item');

  items.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      active = index;
      loadShow();
    });

    item.addEventListener('click', () => {
      showModal(booksToShow[index]);
    });
  });

  loadShow();
}

function loadShow() {
  let stt = 0;
  items.forEach(item => {
    item.style.transition = 'all 1.5s ease';
    item.style.opacity = 0.6;
    item.style.filter = 'none';
    item.style.zIndex = 0;
    item.style.transform = 'none';
  });

  if (items.length === 0) return;

  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = 'none';
  items[active].style.opacity = 1;

  // للكتب بعد الـ active
  for (let i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${250 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }

  // للكتب قبل الـ active
  stt = 0;
  for (let i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-250 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}

next.onclick = () => {
  if (active + 1 < items.length) {
    active++;
    loadShow();
  }
};

prev.onclick = () => {
  if (active - 1 >= 0) {
    active--;
    loadShow();
  }
};

document.getElementById('deleteAllBtn')?.addEventListener('click', () => {
  if (confirm("Are you sure you want to delete ALL books? This cannot be undone.")) {
    books = [];
    storedBooks = [];
    localStorage.removeItem('myBookList');
    localStorage.removeItem('allBooks');
    renderSlider([]);
  }
});

function showModal(book) {
  const modal = document.getElementById('bookModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalAuthor = document.getElementById('modalAuthor');
  const modalDescription = document.getElementById('modalDescription');
  const closeBtn = document.getElementById('closeModal');
  const addToListBtn = document.getElementById('addToListBtn');
  const deleteBtn = document.getElementById('deleteBookBtn');

  modalImage.src = book.image;
  modalTitle.textContent = book.title;
  modalAuthor.textContent = "Author: " + (book.author || "Unknown");
  modalDescription.textContent = book.description || "No description available.";
  modal.style.display = 'flex';

  closeBtn.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
addToListBtn.onclick = () => {
    let list = JSON.parse(localStorage.getItem('myBookList')) || [];
    
    // إنشاء عنصر كتاب جديد
    const bookToAdd = {
        title: book.title,
        author: book.author || "Unknown Author",
        image: book.image,
        description: book.description || "No description available.",
        dateAdded: new Date().toISOString(),
        id: Date.now().toString(36) + Math.random().toString(36).substr(2)
    };
    
    list.push(bookToAdd);
    localStorage.setItem('myBookList', JSON.stringify(list));
    
    // عرض إشعار الإضافة
    showNotification(`"${book.title}" added to your list!`, "success");
    
    // تحديث زر الإضافة للكتاب الحالي فقط
    addToListBtn.innerHTML = '<i class="fas fa-check"></i> Added';
    addToListBtn.classList.add('added');
    addToListBtn.disabled = true;
};

// دالة لعرض الإشعارات
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// في دالة showModal (التهيئة الأولية)
function checkIfBookInList(book) {
    const list = JSON.parse(localStorage.getItem('myBookList')) || [];
    return list.some(b => b.image === book.image);
}

// عند فتح النافذة المنبثقة
const isInList = checkIfBookInList(book);
if (isInList) {
    addToListBtn.innerHTML = '<i class="fas fa-check"></i> Added';
    addToListBtn.classList.add('added');
    addToListBtn.disabled = true;
} else {
    addToListBtn.innerHTML = '<i class="fas fa-plus"></i> Add to My List';
    addToListBtn.classList.remove('added');
    addToListBtn.disabled = false;
}
 deleteBtn.onclick = () => {
    if (confirm("Are you sure you want to permanently delete this book?")) {
      if (deleteBook(book)) {
        updateBooks();
        modal.style.display = 'none';
        renderSlider();
      }
    }
  };
  };




const searchInput = document.getElementById('searchInput');
searchInput?.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();

  // تحديث الكتب من localStorage قبل البحث
  updateBooks();

  // فلترة الكتب بالبحث
  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    (book.author && book.author.toLowerCase().includes(query))
  );

  renderSlider(filtered, true);
});

const toggleCheckbox = document.getElementById('toggleVisibilityCheckbox');
const toggleText = document.getElementById('toggleText');
toggleCheckbox?.addEventListener('change', () => {
  const items = document.querySelectorAll('.slider .item');
  if (toggleCheckbox.checked) {
    items.forEach(item => {
      item.style.visibility = 'hidden';
      item.style.opacity = '0';
    });
    toggleText.textContent = "Unhide books";
  } else {
    items.forEach(item => {
      item.style.visibility = 'visible';
      item.style.opacity = '1';
    });
    toggleText.textContent = "Hide books";
  }
});

// نبدؤو بتحميل الكتب والعرض
updateBooks();
renderSlider();