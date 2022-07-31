async function editFormHandler(event) {
  event.preventDefault();
    
  const title = document.querySelector('#title').value;
  const ingredients = document.querySelector('#ingredients').value;
  const recipe_steps = document.querySelector('#steps').value;
  const image_url = document.querySelector('#image_link').value;
  const category = document.querySelector('#category').value;

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
    
    const response = await fetch(`/api/recipes/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        ingredients,
        recipe_steps,
        image_url,
        category
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-recipe-form').addEventListener('submit', editFormHandler);
  