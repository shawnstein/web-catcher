document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('actionBtn');
    
    btn.addEventListener('click', () => {
        console.log('Button geklickt!');
        alert('Web Catcher ist aktiv!');
    });
});
