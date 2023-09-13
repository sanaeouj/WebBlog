    document.addEventListener("DOMContentLoaded", () => {
        const form1 = document.getElementById("form1");
        const check = document.getElementById("check");

        form1.addEventListener("submit", (event) => {
            event.preventDefault();

            // Créez une requête de formulaire
            const formData = new FormData(form1);

            // Créez une requête de formulaire JSON
            const jsonObject = {};
            formData.forEach((value, key) => {
                jsonObject[key] = value;
            });

            // Utilisez fetch pour envoyer la requête
            fetch("/", {
                method: "POST",
                body: JSON.stringify(jsonObject),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((response) => {
                    form1.reset();
                    check.innerHTML = response.Success;

                    setTimeout(() => {
                        check.innerHTML = "";
                    }, 3000);

                    if (response.Success === "You are registered, You can login now.") {
                        document.getElementById("aa").click();
                    }
                })
                .catch((error) => {
                    console.error("Erreur lors de la requête : ", error);
                });
        });
    });
