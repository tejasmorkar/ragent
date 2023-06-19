window.onload = () => {
    let chatInput = document.getElementById("chat-input");
    let sendButton = document.getElementById("send-button");
    let mainContainerBody = document.getElementById("main-container-body");

    chatInput.focus();

    chatInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") sendButton.click();
    });

    sendButton.addEventListener("click", () => {
        console.log("Send button clicked");
    });

    let mainContentDiv = document.createElement("div");

    if (Notification.permission === "granted") {
        mainContentDiv.innerHTML = "RECENT ACTIVITY";
    } else {
        mainContentDiv.innerHTML = "PLEASE CLICK HERE TO ALLOW NOTIFICATIONS";
        mainContentDiv.classList.add("clickable");

        mainContentDiv.addEventListener("click", () => {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    let notification = new Notification(
                        "Here's your notification!",
                        {
                            body: "This is how your notifications will be sent.",
                        }
                    );
                } else {
                    // // alert(
                    //     "Notifications permission was denied. Please try again."
                    // );
                }
            });
        });
    }

    mainContainerBody.appendChild(mainContentDiv);
};
