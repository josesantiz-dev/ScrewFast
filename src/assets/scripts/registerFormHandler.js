export async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const data = {
        firstname: formData.get("firstname"),
        lastname1: formData.get("lastname1"),
        lastname2: formData.get("lastname2"),
        company: formData.get("company"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        password: formData.get("password"),
        repeatPassword: formData.get("repeatPassword"),
    };

    try {
        const response = await fetch("https://your-api-endpoint.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Error al registrar el usuario.");
        }

        const result = await response.json();
        alert("Registro exitoso: " + result.message);
    } catch (error) {
        console.error("Error:", error);
        alert("Ocurrió un error al registrar. Inténtalo nuevamente.");
    }
}
