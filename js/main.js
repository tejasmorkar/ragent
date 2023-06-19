window.onload = () => {
    let chatInput = document.getElementById("chat-input");
    let sendButton = document.getElementById("send-button");
    let mainContainerBody = document.getElementById("main-container-body");
    let chats = [];

    chatInput.focus();

    chatInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") sendButton.click();
    });

    sendButton.addEventListener("click", () => {
        if (chatInput.value !== "") {
            chats.push(chatInput.value);
        }
        console.log(chats);
    });

    let mainContentDiv = document.createElement("div");

    if (Notification.permission === "granted") {
        mainContentDiv.innerHTML = "RECENT ACTIVITY";
    } else {
        mainContentDiv.innerHTML = "PLEASE CLICK HERE TO ALLOW NOTIFICATIONS";
        mainContentDiv.classList.add("clickable");

        mainContentDiv.addEventListener("click", () => {
            Notification.requestPermission()
                .then((permission) => {
                    if (permission === "granted") {
                        let firstNotification = new Notification(
                            "Here's your notification!",
                            {
                                body: "This is how your notifications will be sent.",
                                tag: "First Notification",
                            }
                        );
                    } else {
                        alert(
                            "Notifications permission was denied. Please try again."
                        );
                    }
                })
                .then(() => {
                    location.reload();
                });
        });
    }

    mainContainerBody.appendChild(mainContentDiv);
};
