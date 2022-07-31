async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#title').value;
    const ingredients = document.querySelector('#ingredients').value;
    const recipe_steps = document.querySelector('#steps').value;
    const image_url = document.querySelector('#image_link').value;
    const category = document.querySelector('#category').value;

    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        ingredients,
        recipe_steps,
        category, 
        image_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-recipe-form').addEventListener('submit', newFormHandler);
  