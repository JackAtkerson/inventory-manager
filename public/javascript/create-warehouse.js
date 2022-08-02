async function newFormHandler(event) {
    event.preventDefault();

    const warehouse_name = document.querySelector('input[name="warehouse-name"]').value;
    const description = document.querySelector('input[name="description"]').value;

    const response = await fetch(`/api/warehouses`, {
        method: 'POST',
        body: JSON.stringify({
            warehouse_name,
            description
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

document.querySelector('.create-warehouse-form').addEventListener('submit', newFormHandler);