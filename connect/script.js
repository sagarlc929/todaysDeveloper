

document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById('card-container');

    people.forEach(person => {
        // Create the card element
        const card = document.createElement('div');
        card.className = 'card';

        // Create and append the image
        const img = document.createElement('img');
        img.src = person.image;
        card.appendChild(img);

        // Create and append the name
        const name = document.createElement('h3');
        name.textContent = person.name;
        card.appendChild(name);

        // Create and append the description
        const desc = document.createElement('p');
        desc.innerHTML = person.description || "";
        desc.className = 'description';
        card.appendChild(desc);

        // Create and append the profession
        const profession = document.createElement('p');
        profession.className = 'profession';
        profession.textContent = person.profession;
        card.appendChild(profession);
        
        // Create learn more link
        const learnMore = document.createElement('a');
        learnMore.className = "learn-more";
        learnMore.textContent = 'Learn more';
        const chevronRight = document.createElement('i');
        chevronRight.className = ' fas fa-chevron-right';
        learnMore.appendChild(chevronRight);
        
        card.appendChild(learnMore);
     /*     
<a href="https://codepen.io/FreeCodeCamp/" 
      class="btn btn-show-all" target="_blank">Show all
      <i class="fas fa-chevron-right"></i></a>
*/

        // Create the anchor element
        const anchor = document.createElement('a');
        anchor.target = '_blank';
        anchor.href = person.learnMore;
        anchor.className = 'card-link'; // Add a class if needed for styling

        // Append the card to the anchor
        anchor.appendChild(card);

        // Append the anchor to the card container
        cardContainer.appendChild(anchor);
    });
});

