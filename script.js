document.getElementById('upload').addEventListener('change', function(event) {
    const files = event.target.files;
    const card = document.getElementById('card');
    card.innerHTML = ''; // Clear existing content

    // Calculate number of spans needed
    const totalImages = files.length;
    const spanWidth = 100 / totalImages;

    for (let i = 0; i < totalImages; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = `Product view ${i + 1}`;
            img.style.setProperty('--i', i);
            card.appendChild(img);

            const span = document.createElement('span');
            span.style.left = `calc(${spanWidth}% * ${i})`;
            span.style.width = `${spanWidth}%`;

            span.addEventListener('mouseover', () => {
                document.querySelectorAll('.card img').forEach(img => img.classList.remove('active'));
                img.classList.add('active');
            });

            card.appendChild(span);
        };

        reader.readAsDataURL(file);
    }
});
