// الكتب الأصلية (ثابتة)
const originalBooks = [
  {
    title: "They both die at the end",
    author:"Adam Silvera",
    description: "In They Both Die at the End, two teenage boys, Mateo and Rufus, both receive notifications from 'Death-Cast' stating they have only 24 hours to live. They connect through the Last Friend app and spend their last day together in New York City, forming a bond and facing their fears and the end of their lives. The book explores themes of mortality, human connection, and living life to the fullest. While the title suggests their tragic ending, the story focuses on the meaningful experiences and love they find during their final day.",
    image: "img/they both die at the end.jpg"
  },
  {
    title: "The Help",
    author: "Kathryn Stockett",
    description: "The Help is a historical fiction story set in Jackson, Mississippi during the early 1960s, focusing on the experiences of African American maids working in white households during the Jim Crow era. The story unfolds through the perspectives of three main characters: Aibileen Clark, a Black maid; Minny Jackson, another Black maid; and Skeeter Phelan, a white woman who aspires to be a writer.",
    image: "img/js3d.jpg"
  },
  {
    title: "The Seven husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    description: "The Seven Husbands of Evelyn Hugo by Taylor Jenkins Reid follows the life of Evelyn Hugo, a famous actress, as she tells her story to a struggling journalist, Monique Grant. The story reveals Evelyn's complicated life, including her seven marriages, her long-term relationship with actress Celia St. James, and the sacrifices she made to achieve stardom in the 1950s and 1960s. ",
    image: "img/seven husbands of evelyn hugo.jpg"
  },
  {
    title: "The Song of Achilles",
    author: "Madeline Miller",
    description: "The Song of Achilles is a retelling of the Iliad from the perspective of Patroclus, a young prince who becomes the lover of Achilles, the greatest Greek warrior. The novel explores their deep bond, the challenges they face due to their love in a world dominated by war and honor, and the tragic events leading to the Trojan War. It delves into themes of love, destiny, and the complexities of heroism.",
    image: "img/the song of achilles.png"
  },
  {
    title: "Murder on Family Grounds",
    author: "Susan Rowland",
    description: "Murder on Family Grounds follows Mary Wandwalker as she navigates a complex murder mystery intertwined with her own past and the secrets of the Falconer family. Mary, now jobless, is drawn into the investigation when members of the Falconer family are killed, with one of the deaths seemingly connected to a letter she wrote decades ago. Her past, including a tragic loss and a difficult decision surrounding her pregnancy, is revealed as crucial to the case, as is her relationship with the Falconer family, who had refused to help her.",
    image: "img/12d0afec49bbf039a3c6913bf762ecb9.jpg"
  },
  {
    title:"The Fine Print",
    author:"Lauren Asher",
    description:"The Fine Print by Lauren Asher follows Rowan, the new Dreamland Parks Director, and Zahra, a Dreamland employee. Rowan is tasked with revitalizing Dreamland and is initially dismissive of Zahra. Their relationship begins with dislike but evolves into a complex and romantic connection. Ultimately, they must work together to succeed, navigating their personal and professional lives, and come to terms with the challenges they face. ",
    image:"img/the fine print.jpg"
  },
  {
    title: "Her favorite color was yellow",
    author: "Edgar Holmes",
    description: "Her Favorite Color Was Yellow is Edgar Holmes' debut collection of poetry. It is an ode to his muse, his all-consuming love, his everything- how it feels to find love, lose it, and get it back. Pour yourself some coffee and curl up with this book to let yourself feel something beautiful and true.",
    image: "img/2d85b14b1a846315f97b5e4578c3ef51.jpg"
  },
  {
    title: "Ignite Me",
    author: "Taherih Mafi",
    description: "“Ignite Me,” the thrilling third installment of Tahereh Mafi’s Shatter Me series, opens with a heart-stopping turn of events. Juliette Ferrars, the protagonist with lethal-touch powers, finds herself in the wake of a near-fatal shooting. She wakes up in the clutches of her former captor and complex ally, Aaron Warner Anderson, son of the cruel Supreme Commander Anderson who shot her. ",
    image: "img/ignite me.jpg"
  },
  {
    title: "Just Love HER",
    author: "Raz Mihal",
    description: "Just Love Her by Raz Mihal is a spiritual exploration of divine love and soul connection, presented as a poetic and reflective journey through heartfelt meditations. Mihal explores his experience of an eternal bond with a beloved soul, Her, emphasizing love's transformative power and its connection to the divine feminine within. The book delves into the nature of love, its challenges, and its capacity to bring about spiritual growth, offering philosophical insights and reflections on spiritual connection and divine love. ",
    image: "img/just love her.jpg"
  },
  {
    title: "Memoirs of a Geisha",
    author: "Arthor Golden",
    description: "In the 1920s, 9-year-old Chiyo Sakamoto is sold to a geisha house where she is forced into servitude, receiving nothing in return until the house's ruling hierarchy determines whether she is of high-enough quality to service the clientele--men who visit and pay for conversation, dance, and song. After rigorous years of training and with World War II imminent, Chiyo becomes Sayuri Nitta, a geisha of incredible beauty and influence.",
    image: "img/8171410882fc2be4c2f3a5b103de9b0c.jpg"
  },
  {
    title: "Ruby",
    author: "V.C.Andrews",
    description: "In the V.C. Andrews novel Ruby, the protagonist, Ruby Landry, lives a seemingly happy life with her grandmother in the Louisiana bayou. However, she discovers shocking secrets about her family, including her estranged father, which lead her to seek him out in his vast New Orleans mansion. She uncovers a web of deceit, blackmail, and madness, ultimately grappling with the implications of her family's dark history and the enduring power of love. ",
    image: "img/d1f5a7ff3ec6725a42c80491e8b83833.jpg"
  },
  {
    title: "The Prison Healer",
    author:"Lynette Noni",
    description: "The Prison Healer follows 17-year-old Kiva, who has spent ten years surviving in the notorious prison of Zalindov as its healer. When the Rebel Queen is captured, Kiva is tasked with keeping her alive long enough for her to face the Trial by Ordeal, a series of deadly challenges. Kiva receives a coded message from her family, urging her to protect the Queen, and ultimately volunteers to face the Trials in her place, hoping to secure their freedom. However, no one has ever survived the Trials, and Kiva faces not only the challenges but also a brewing prison rebellion and a mysterious new inmate vying for her affections, in the midst of a plague sweeping Zalindov.",
    image: "img/prison healer.jpg"
  },
  {
    title: "Macbeth",
    author:"William Shakespeare",
    description: "Macbeth is a tragedy by William Shakespeare that tells the story of a Scottish general, Macbeth, who is led to wicked thoughts by the prophecies of three witches. After receiving a prophecy that he will become king, Macbeth, spurred on by his ambitious wife, Lady Macbeth, murders King Duncan and takes the throne. However, guilt and paranoia consume him, leading to further violence and his eventual downfall.",
    image: "img/macbeth.jpg"
  },
  {
    title: "The Ballad of Songbirds and Snakes",
    author:"Suzanne Collins",
    description: "The Ballad of Songbirds and Snakes is a prequel to The Hunger Games series, set 64 years before Katniss Everdeen's story. It follows a young Coriolanus Snow, who is assigned to mentor a tribute from District 12 during the 10th Hunger Games. As he navigates the challenges of the games and his own ambitions, Coriolanus grapples with moral dilemmas and the nature of power, ultimately shaping his future as the tyrannical president of Panem.",
    image: "img/songbirds and snakes.jpg"
  },
  {
    title: "The Bell Jar",
    author:"Sylvia Plath",
    description:"The Bell Jar by Sylvia Plath follows Esther Greenwood, a promising young woman who enters a period of mental health crisis as she navigates societal expectations and her own identity. Esther's journey involves a prestigious summer internship, a boyfriend, and a sense of unease with the path laid out for her as a woman in the 1950s. She experiences a breakdown, attempts suicide, and is eventually admitted to a psychiatric hospital. The novel explores themes of mental illness, societal pressures on women, and the struggle for individual identity.",
    image:"img/the bell jar.jpg"
  },
  {
    title:"The Cruel Prince",
    author:"Holly Black",
    description: "The Cruel Prince,the first book in The Folk of the Air series by Holly Black, follows mortal girl Jude as she navigates the treacherous world of Elfhame, a High Court of Faeries. After witnessing the murder of her parents, Jude and her sisters are taken to live among the fey, where she strives to prove her worth in a society that despises humans. Jude's ambition to belong and gain power leads her into political intrigues, deceptions, and even bloodshed, particularly with Prince Cardan, the cruelest of the High Court. As she forms alliances and faces betrayals, Jude's journey reveals the complex nature of loyalty and vengeance in a world where the line between mortal and fey is blurred.",
    image:"img/the cruel prince.jpg"
  },
  {
    title:"The Wicked King",
    author:"Holly Black",
    description: "The Wicked King by Holly Black follows Jude Duarte as she navigates the treacherous world of Faerie after she has secured her position as the power behind the throne. She is now a key player in a world where power is unstable, and trust is a rare commodity. Jude, now working with her former enemy, Prince Cardan, must also protect her younger brother, Oak, who is the true heir to the throne. She faces betrayal and dangerous alliances as she battles to maintain her power and ensure the safety of her family in a world where politics and ambition are ever-present. ",
    image:"img/the wicked king.jpg"
  },
  {
    title:"The Queen of Nothing",
    author:"Holly Black",
    description: "The Queen of Nothing by Holly Black is the conclusion to The Folk of the Air trilogy. It follows Jude Duarte as she navigates her new life in the mortal world after being exiled from Faerie. Jude is determined to reclaim her place in the world of faeries and confronts her enemies, including her estranged husband, Prince Cardan. As she faces betrayal, danger, and the complexities of love and power, Jude must make difficult choices that will determine her fate and the fate of Faerie itself.",
    image:"img/the queen of nothing.jpg"
  },
  {
    title:"Twisted Games",
    author:"Ana Huang",
    description:"Twisted Games by Ana Huang is a contemporary romance novel that follows the story of Bridget von Ascheberg, a princess who is determined to live her life on her own terms. When she meets her new bodyguard, Rhys Larsen, their initial animosity turns into a passionate romance. As they navigate the challenges of royal life, duty, and their growing feelings for each other, they must confront the obstacles that come with their different worlds. The novel explores themes of love, loyalty, and the complexities of relationships in a royal setting.",
    image:"img/twisted games.jpg"
  },
  {
    title:"The Mortal Instruments : City of Bones",
    author:"Cassandra Clare",
    description:"City of Bones by Cassandra Clare follows 15-year-old Clary Fray as she discovers she is a Shadowhunter, a warrior who hunts demons, after witnessing a murder at a nightclub. Her mother, Jocelyn, disappears, and Clary is drawn into a world of Shadowhunters, werewolves, vampires, and other supernatural creatures. Clary joins forces with Jace, Isabelle, and Alec, Shadowhunters, to find her mother and unravel the secrets surrounding her lineage and the mysterious Mortal Cup. The book introduces the supernatural world of the Mortal Instruments and Clary's journey into becoming a shadowhunter.",
    image:"img/city of bones.jpg"
  },
  {
    title:"The Mortal Instruments : City of Ashes",
    author:"Cassandra Clare",
    description:"The book follows 16-year-old Clary Fray, who has recently discovered that she is not an ordinary mortal, but a Shadowhunter, part of a group who saves the world from demons. In City of Bones (2007) the first book of the series, Clary also learned that she is the daughter of rogue Shadowhunter Valentine Morgenstern and that her romantic interest, Jace Wayland, may be her brother. Struggling with these emotional upheavals, Clary and Jace also have to stop Valentine, who is summoning an army of horrifying demons, killing Downworlder teenagers, and collecting the magical artifacts called the “Mortal Instruments” to change the world forever.",
    image:"img/city of ashes.jpg"
  },
  {
    title:"The 100",
    author:"Kass Morgan",
    description:"The 100 by Kass Morgan is a young adult science fiction novel set in a post-apocalyptic world where Earth has been uninhabitable for nearly a century. The story follows a group of 100 juvenile delinquents sent back to Earth from a space station called the Ark to determine if the planet is safe for human life. As they navigate the challenges of survival, they encounter the remnants of humanity and must confront their pasts, relationships, and the harsh realities of their new environment. The novel explores themes of survival, identity, and the consequences of choices.",
    image:"img/the 100.jpg"
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
let active = 14;
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
      <h3 class="emptylist">No books available!</h3>
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
        <p class="emptylist">This book is not available.<br>Do you want to add it?</p>
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
