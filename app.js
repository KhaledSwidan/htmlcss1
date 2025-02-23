document.addEventListener('DOMContentLoaded', () => {
  dropdownBtns.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = button.getAttribute('aria-expanded') === 'true';

      dropdownBtns.forEach((btn) => {
        btn.setAttribute('aria-expanded', 'false');
      });

      button.setAttribute('aria-expanded', !isOpen);
    });
  });

  // إغلاق القوائم عند النقر خارجها
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.item')) {
      dropdownBtns.forEach((btn) => {
        btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // التنقل بالقائمة باستخدام الكيبورد
  dropdownBtns.forEach((button) => {
    button.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        button.click();
      }
    });
  });
});

// بيانات الأشخاص
const people = [
  {
    name: 'Jill Scott',
    job: 'Frontend Engineer',
    image: './image.jpg',
    description:
      'Transforming ideas into realities, creating interfaces that inspire and engage users dreams.',
  },
  {
    name: 'Mark Johnson',
    job: 'Backend Developer',
    image: './image.jpg',
    description:
      'Building scalable backend systems and APIs that power modern applications.',
  },
  {
    name: 'Samantha Lee',
    job: 'UI/UX Designer',
    image: './image.jpg',
    description:
      'Crafting beautiful and user-friendly designs that enhance user experiences.',
  },
  {
    name: 'David Brown',
    job: 'Full Stack Developer',
    image: './image.jpg',
    description:
      'Combining frontend and backend skills to develop robust and interactive web apps.',
  },
  {
    name: 'Lisa White',
    job: 'Mobile Developer',
    image: './image.jpg',
    description:
      'Developing cross-platform mobile applications with a focus on performance.',
  },
];

// عنصر ال container في HTML
const container = document.querySelector('.cards-container');

// إنشاء الكروت ديناميكيًا
people.forEach((person) => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${person.image}" alt="${person.name}" />
    <div>
      <h2>${person.name}</h2>
      <h3>${person.job}</h3>
      <p>${person.description}</p>
      <div class="socials">
        <button><i class="fa-brands fa-dribbble"></i></button>
        <button><i class="fa-brands fa-pinterest"></i></button>
        <button><i class="fa-brands fa-codepen"></i></button>
      </div>
    </div>
  `;

  container.appendChild(card);
});
