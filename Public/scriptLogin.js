    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("form");
        const check = document.getElementById("check");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(form);

            // Utilisez fetch pour envoyer la requête
            fetch("/login", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((response) => {
                    form.reset();
                    check.innerHTML = response.Success;

                    setTimeout(() => {
                        check.innerHTML = "";
                    }, 3000);

                    if (response.Success === "Success!") {
                        document.getElementById("aa").click();
                    }
                })
                .catch((error) => {
                    console.error("Erreur lors de la requête : ", error);
                });
        });
    });

