document.querySelector('i.fa-bars').addEventListener('click', () => {
  const menu = document.querySelector('#mobile-menu');
  menu.style.display = 'flex';
  const closeButton = document.createElement('li');
  const closeButtonSpan = document.createElement('span');
  closeButtonSpan.classList.add('close-button');
  closeButton.appendChild(closeButtonSpan);
  menu.insertBefore(closeButton, menu.firstChild);
  closeButton.addEventListener('click', () => {
    menu.style.display = 'none';
    closeButton.remove();
  });
  const items = document.querySelectorAll('#mobile-menu li');
  const itemsArr = Array.from(items);
  for (let i = 0; i < itemsArr.length; i += 1) {
    itemsArr[i].addEventListener('click', () => {
      menu.style.display = 'none';
      closeButton.remove();
    });
  }
});

const projects = [
  {
    media: [
      { type: 'image', src: 'images/monopoly.png' },
    ],
    title: 'vacashion',
    client: 'School Project',
    role: 'Back-end Developer',
    year: '2025',
    tags: ['GODOT','Python', 'PostgreSQL','GdScript'],
    liveLink: '',
    sourceLink: 'https://github.com/raoufvro67/vacashion',
    paragraph:
      'Vacashion is a Monopoly-style video game developed with Godot. It replaces streets with countries and supports multiplayer gameplay. The project includes an interactive interface, animations, customizable settings, and automated game logic.'
  },
  {
    media: [
      { type: 'image', src: 'images/graph.png' },
    ],
    title: 'Business Dashboard',
    client: 'School project',
    role: 'Frontend developer',
    year: '2025',
    tags: ['Python', 'PostgreSQL', 'React.js', 'Excel'],
    liveLink: '',
    sourceLink: '',
    paragraph:
      'Business Dashboard was initially designed as a school project to help companies easily visualize their key statistics. The goal was to create an intuitive and interactive interface that displays business data clearly, allowing better decision-making. By combining practical development skills with user-centric design, we aimed to simulate a real-world tool used in professional environments.',
  },
  {
    media: [
      { type: 'image', src: 'images/thinkboard.png' },
      
    ],
    title: 'ThinkBoard',
    client: 'Personal Project',
    role: 'Full Stack developer',
    year: '2025',
    tags: ['React', 'Render', 'Javascript','MongoDb','Express','Node'],
    liveLink: 'https://main-thinkpboard.onrender.com/',
    sourceLink: '',
    paragraph:
      'A note keeper application inspired by notion. Users can add notes with specific marksowns into multiple pages.',
  },



  {
    media: [
      { type: 'image', src: 'images/work3.jpg' },
    ],
    title: 'Budget App',
    client: 'Personal Project',
    role: 'Full Stack Developer',
    year: '2024',
    tags: ['Ruby on Rails', 'Postgres', 'Rspec'],
    liveLink: '',
    sourceLink: '',
    paragraph:
      'Budget app is a mobile application that helps users to keep track of their expenditures. It allows users to add expenditure categories and add expenditures to any category. Finally they can see the total spent amount for each category. ',
  },
  {
    media: [{ type: 'image', src: 'images/work5.jpg' }],
    title: 'To-do List',
    client: 'School project',
    role: 'Full Stack Developer',
    year: '2023',
    tags: ['html', 'css', 'javaScript', 'webpack','SQL'],
    liveLink: '',
    sourceLink: '',
    paragraph:
      'This project is focused on using webpack for creating an optimized deploy. In this project you can add a task, edit a task, mark a task as completed, remove a task or remove all completed tasks. After any interaction all tasks will be automatically saved into the local storage and They will be recalled after reopnening the page.   ',
  },

];

function createWorks() {
  const works = document.querySelector('#works');
  projects.map((el) => {
    const work = document.createElement('div');
    work.classList.add('work');
    work.innerHTML = `
        <div>
  ${el.media
    .map((med, i) => {
      if (med.type === 'image') {
        return `<img src='${med.src}' alt='${el.title}' class='${
          i === 0 ? 'visible' : ''
        }' />`;
      }
      if (med.type === 'video') {
        return `<iframe width="100%" class=' ${
          i === 0 ? 'visible' : ''
        }' src="${
          med.src
        }" title="HomeStretch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
      }
      return '';
    })
    .join('')}
        </div>
        <div>
          <h3>${el.title}</h3>
          <span class='span1'>${el.client}</span>
          <i class='devider'></i>
          <span class='span2'>${el.role}</span>
          <i class='devider'></i>
          <span class='span2'>${el.year}</span>
          <p>${el.paragraph}</p>
          <ul class='tags'>
          ${el.tags.map((t) => `<li class='tag'>${t}</li>`).join('')}    </ul>
          <div class='break'></div>
          <button class="btnProject">See Project</button>
        </div>
    `;
    works.appendChild(work);

    // Next Button
    const btnNext = document.createElement('button');
    btnNext.classList.add('next');
    btnNext.innerHTML = '<i class="fas fa-chevron-right"></i>';
    btnNext.addEventListener('click', () => {
      const img = work.querySelector('img.visible, iframe.visible');
      if (['IMG', 'IFRAME'].includes(img.nextElementSibling.tagName)) {
        img.classList.remove('visible');
        setTimeout(() => {
          img.style.display = 'none';
          img.nextElementSibling.style.display = 'block';
          setTimeout(() => {
            img.nextElementSibling.classList.add('visible');
          }, 20);
        }, 100);
      } else {
        img.classList.remove('visible');
        setTimeout(() => {
          img.style.display = 'none';
          img.parentElement.children[1].style.display = 'block';
          setTimeout(() => {
            img.parentElement.children[1].classList.add('visible');
          }, 20);
        }, 100);
      }
    });
    work.children[0].appendChild(btnNext);

    // Previous Button
    const btnPrev = document.createElement('button');
    btnPrev.classList.add('prev');
    btnPrev.innerHTML = '<i class="fas fa-chevron-left"></i>';
    btnPrev.addEventListener('click', () => {
      const img = work.querySelector('img.visible, iframe.visible');
      if (['IMG', 'IFRAME'].includes(img.previousElementSibling.tagName)) {
        img.classList.remove('visible');
        setTimeout(() => {
          img.style.display = 'none';
          img.previousElementSibling.style.display = 'block';
          setTimeout(() => {
            img.previousElementSibling.classList.add('visible');
          }, 20);
        }, 100);
      } else {
        img.classList.remove('visible');
        setTimeout(() => {
          img.style.display = 'none';
          img.parentElement.children[
            img.parentElement.children.length - 2
          ].style.display = 'block';
          setTimeout(() => {
            img.parentElement.children[
              img.parentElement.children.length - 2
            ].classList.add('visible');
          }, 20);
        }, 100);
      }
    });
    work.children[0].prepend(btnPrev);

    return null;
  });
}

function craetePopups() {
  const button = document.querySelectorAll('.work button.btnProject');
  const buttonArr = Array.from(button);
  buttonArr.map((el, i) => {
    el.addEventListener('click', () => {
      const popupContainer = document.createElement('div');
      popupContainer.classList.add('popup-container');
      popupContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup-container')) {
          popupContainer.remove();
          document.querySelector('html').style.overflow = 'auto';
        }
      });

      const popup = document.createElement('div');
      popup.classList.add('popup');

      popupContainer.appendChild(popup);

      const closeButton = document.createElement('span');
      closeButton.classList.add('close-button');
      closeButton.addEventListener('click', () => {
        popupContainer.remove();
        document.querySelector('html').style.overflow = 'auto';
      });
      popup.appendChild(closeButton);

      const title = document.createElement('h2');
      title.innerHTML = projects[i].title;
      popup.appendChild(title);

      const client = document.createElement('span');
      client.innerHTML = projects[i].client;
      client.classList.add('span1');
      popup.appendChild(client);

      const devider1 = document.createElement('i');
      devider1.classList.add('devider');
      popup.appendChild(devider1);

      const role = document.createElement('span');
      role.innerHTML = projects[i].role;
      role.classList.add('span2');
      popup.appendChild(role);

      const devider2 = document.createElement('i');
      devider2.classList.add('devider');
      popup.appendChild(devider2);

      const year = document.createElement('span');
      year.innerHTML = projects[i].year;
      year.classList.add('span2');
      popup.appendChild(year);

      const media = document.createElement('div');
      media.classList.add('media');
      projects[i].media.map((med, i) => {
        if (med.type === 'image') {
          media.innerHTML += `<img src='${med.src}' alt='${el.title}' class='${
            i === 0 ? 'visible' : ''
          }' />`;
        }
        if (med.type === 'video') {
          media.innerHTML += `<iframe width="100%" class=' ${
            i === 0 ? 'visible' : ''
          }' src="${
            med.src
          }" title="HomeStretch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        }
        return null;
      });
      popup.appendChild(media);

      // Next Button
      const btnNext = document.createElement('button');
      btnNext.classList.add('next');
      btnNext.innerHTML = '<i class="fas fa-chevron-right"></i>';
      btnNext.addEventListener('click', () => {
        const img = media.querySelector('img.visible, iframe.visible');
        if (['IMG', 'IFRAME'].includes(img.nextElementSibling.tagName)) {
          img.classList.remove('visible');
          setTimeout(() => {
            img.style.display = 'none';
            img.nextElementSibling.style.display = 'block';
            setTimeout(() => {
              img.nextElementSibling.classList.add('visible');
            }, 20);
          }, 100);
        } else {
          img.classList.remove('visible');
          setTimeout(() => {
            img.style.display = 'none';
            img.parentElement.children[1].style.display = 'block';
            setTimeout(() => {
              img.parentElement.children[1].classList.add('visible');
            }, 20);
          }, 100);
        }
      });
      media.appendChild(btnNext);

      // Previous Button
      const btnPrev = document.createElement('button');
      btnPrev.classList.add('prev');
      btnPrev.innerHTML = '<i class="fas fa-chevron-left"></i>';
      btnPrev.addEventListener('click', () => {
        const img = media.querySelector('img.visible, iframe.visible');
        if (['IMG', 'IFRAME'].includes(img.previousElementSibling.tagName)) {
          img.classList.remove('visible');
          setTimeout(() => {
            img.style.display = 'none';
            img.previousElementSibling.style.display = 'block';
            setTimeout(() => {
              img.previousElementSibling.classList.add('visible');
            }, 20);
          }, 100);
        } else {
          img.classList.remove('visible');
          setTimeout(() => {
            img.style.display = 'none';
            img.parentElement.children[
              img.parentElement.children.length - 2
            ].style.display = 'block';
            setTimeout(() => {
              img.parentElement.children[
                img.parentElement.children.length - 2
              ].classList.add('visible');
            }, 20);
          }, 100);
        }
      });
      media.prepend(btnPrev);

      const paragraph = document.createElement('p');
      paragraph.innerHTML = projects[i].paragraph;
      popup.appendChild(paragraph);

      const tagsAndButtonsDiv = document.createElement('div');
      tagsAndButtonsDiv.classList.add('tags-buttons');

      const tags = document.createElement('ul');
      projects[i].tags.map((t) => {
        const tag = document.createElement('li');
        tag.classList.add('tag');
        tag.innerHTML = t;
        tags.appendChild(tag);
        return null;
      });
      tagsAndButtonsDiv.appendChild(tags);

      const seeLiveButton = document.createElement('a');
      seeLiveButton.setAttribute('href', projects[i].liveLink);
      seeLiveButton.setAttribute('target', '_blank');
      seeLiveButton.classList.add('see-project-button');
      seeLiveButton.innerHTML = '<button> See Live </button>';
      tagsAndButtonsDiv.appendChild(seeLiveButton);

      if (projects[i].sourceLink === 'Private') {
        const seeSourceButton = document.createElement('span');
        seeSourceButton.classList.add('see-source-button');
        seeSourceButton.innerHTML = '<button disabled> Source is private </button>';
        tagsAndButtonsDiv.appendChild(seeSourceButton);
      } else {
        const seeSourceButton = document.createElement('a');
        seeSourceButton.setAttribute('href', projects[i].sourceLink);
        seeSourceButton.setAttribute('target', '_blank');
        seeSourceButton.classList.add('see-source-button');
        seeSourceButton.innerHTML = '<button> See Source </button>';
        tagsAndButtonsDiv.appendChild(seeSourceButton);
      }

      popup.appendChild(tagsAndButtonsDiv);

      document.querySelector('html').style.overflow = 'hidden';
      document.querySelector('body').appendChild(popupContainer);
    });
    return null;
  });
}

document.addEventListener(
  'DOMContentLoaded',
  () => {
    createWorks();
    craetePopups();
  },
  false,
);

const form = document.getElementsByTagName('form')[0];
const emailBox = document.getElementById('email');
const nameBox = document.getElementById('name');
const messageBox = document.getElementById('message');
const error = document.getElementsByClassName('error-message')[0];
const submitButton = document.querySelector('.submit-button');

function showError(text) {
  // if (!error.style.opacity) {
  emailBox.addEventListener('input', () => {
    if (
      emailBox.validity.valid
      && emailBox.value.toLowerCase() === emailBox.value
    ) {
      emailBox.style.boxShadow = '';
      error.style.opacity = 0;
    } else {
      error.style.opacity = 1;
      emailBox.style.boxShadow = 'red 0 3px 0 0, red 0 0 0 3px';
    }
  });
  error.style.opacity = 1;
  emailBox.style.boxShadow = 'red 0 3px 0 0, red 0 0 0 3px';
  // }

  const outInterval = setInterval(() => {
    error.style.opacity -= 0.02;
    if (error.style.opacity <= 0) {
      clearInterval(outInterval);
      error.innerHTML = text;
      const inInterval = setInterval(() => {
        error.style.opacity = Number(error.style.opacity) + 0.02;
        if (error.style.opacity >= 1) {
          clearInterval(inInterval);
        }
      }, 200 / 50);
    }
  }, 200 / 50);
}

submitButton.addEventListener('click', () => {
  if (emailBox.value.toLowerCase() !== emailBox.value) {
    showError('All email letters should be in lower case.');
  } else if (emailBox.validity.valueMissing) {
    showError('Please enter your email address.');
  } else if (emailBox.validity.typeMismatch) {
    showError('Please enter a valid email address.');
  } else {
    form.submit();
  }
});

let userInfo = { name: '', email: '', message: '' };
if (localStorage.userInfo !== undefined) {
  userInfo = JSON.parse(localStorage.userInfo);
  nameBox.value = userInfo.name ? userInfo.name : '';
  emailBox.value = userInfo.email ? userInfo.email : '';
  messageBox.value = userInfo.message ? userInfo.message : '';
}

nameBox.addEventListener('input', () => {
  userInfo.name = nameBox.value;
  localStorage.userInfo = JSON.stringify(userInfo);
});

emailBox.addEventListener('input', () => {
  userInfo.email = emailBox.value;
  localStorage.userInfo = JSON.stringify(userInfo);
});

messageBox.addEventListener('input', () => {
  userInfo.message = messageBox.value;
  localStorage.userInfo = JSON.stringify(userInfo);
});

const chevrons = document.querySelectorAll('.chevron');
Array.from(chevrons).forEach((chevron) => {
  chevron.addEventListener('click', () => {
    chevron.classList.toggle('fa-chevron-down');
    chevron.classList.toggle('fa-chevron-right');
    chevron.nextElementSibling.classList.toggle('hidden');
  });
});

document.querySelector('.get-resume').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'Boubachiche abderaouf-cv.pdf';
});
