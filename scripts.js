const nameButton = document.getElementById('fetch-name-btn')
const exploreButton = document.getElementById('explore-btn')
const historyButton = document.getElementById('history-btn')
const output = document.querySelector('.api-output')
// const loadingButton = document.getElementById("loadingButton")
const outputContainer = document.getElementById("output-container")
const emailButton = document.getElementById('fetch-email-btn')
const exploreoutputContainer = document.getElementById("explore-output-container")
const exploreoutput = document.querySelector('.explore-api-output')
const historyoutputContainer = document.getElementById("history-output-container")
const historyoutput = document.querySelector('.history-api-output')

// Function for Name section
if (nameButton) {
    nameButton.addEventListener('click', async () => {
        // loadingButton.style.display = 'block'
        // loadingButton.scrollIntoView({ behavior: 'smooth' })

        const prompt = `You are an expert marketer in the area of pet names, You run CatNameGenius - the ultimate software for cat-lovers! It means that finding the perfect name for a furry friend has never been easier. The algorithm takes into account the cat's unique personality, breed, and physical attributes to generate a list of customized and personalized names just for them. With CatNameGenius, you'll never have to struggle with naming your cat again. Say goodbye to generic names and hello to a name that truly reflects your cat's one-of-a-kind spirit. Get started today to give a feline companion the purrfect name they deserve! Now suggest 5 cat names and add a sentence to share why they would be great names:`

    
        const keyresp = await fetch('/.netlify/functions/get-token')
        .then(response => response.json()
        )
    
        const response = await fetch(
                `https://api.openai.com/v1/chat/completions`,
                {
                    body: JSON.stringify({"model": "gpt-3.5-turbo", "messages": [{"role": "system", "content": prompt}], "temperature": 0.99, "max_tokens": 400}),
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        Authorization:`Bearer ` + keyresp['message'],
                    },
                        }
            ).then((response) => {
                if (response.ok) {
                    response.json().then((json) => {
                        output.textContent = json.choices[0].message.content.trim();
                    });
                }
                
                outputContainer.style.display = 'block';
                // loadingButton.style.display = 'none';
                // outputContainer.scrollIntoView({ behavior: 'smooth' })
            });
    
            // console.log("Completed!");
    
        });
    }

// Function for Explore section
if (exploreButton) {
    exploreButton.addEventListener('click', async () => {
        // loadingButton.style.display = 'block'
        // loadingButton.scrollIntoView({ behavior: 'smooth' })
        const explorecatName = document.getElementById("explorecatName").value
        const prompt = `You are an expert pet content creator and the inventor of CatNameExplorer - the ultimate software for cat lovers who want to know the true meaning behind their furry friend's name. Your powerful database contains thousands of cat names and their meanings, including traditional, trendy, and unique options. A user simply inputs their cat's name, and within seconds,they'll receive a comprehensive report on its origins, history, and symbolism. The user will discover the hidden meanings behind their cat's name and gain a deeper appreciation for their unique identity. When users use CatNameExplorer, they'll gain a new level of understanding and connection with their feline companion. The user can unlock the secrets of your cat's name! Now write a CatNameExplorer report on the origins, history, and symbolism of the cat name ${explorecatName}`

    
        const keyresp = await fetch('/.netlify/functions/get-token')
        .then(response => response.json()
        )
    
        const response = await fetch(
                `https://api.openai.com/v1/chat/completions`,
                {
                    body: JSON.stringify({"model": "gpt-3.5-turbo", "messages": [{"role": "system", "content": prompt}], "temperature": 0.99, "max_tokens": 400}),
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        Authorization:`Bearer ` + keyresp['message'],
                    },
                        }
            ).then((response) => {
                if (response.ok) {
                    response.json().then((json) => {
                        exploreoutput.textContent = json.choices[0].message.content.trim();
                    });
                }
                
                exploreoutputContainer.style.display = 'block';
                // loadingButton.style.display = 'none';
                // outputContainer.scrollIntoView({ behavior: 'smooth' })
            });
    
            // console.log("Completed!");
    
        });
    }


// Function for History section
if (historyButton) {
    historyButton.addEventListener('click', async () => {
        // loadingButton.style.display = 'block'
        // loadingButton.scrollIntoView({ behavior: 'smooth' })
        const historycatName = document.getElementById("historycatName").value
        const prompt = `You run CatPastLives - the ultimate software for cat lovers who want to discover the mysterious past lives of their beloved feline companions. Your innovative technology uses advanced algorithms to tap into the spiritual realm, revealing your cat's previous incarnations and the lessons they learned in each life. A user simply needs to input their cat's name, and within moments, they'll receive a detailed report on their past lives, including their personalities, experiences, and even their relationships with their past owners. Users will unleash the mysteries of their cat's soul and gain a deeper understanding of their unique spirit. With CatPastLives, users can discover a new level of connection with their feline companion. Now write a CatPastLife report for a cat named ${historycatName}`

    
        const keyresp = await fetch('/.netlify/functions/get-token')
        .then(response => response.json()
        )
    
        const response = await fetch(
                `https://api.openai.com/v1/chat/completions`,
                {
                    body: JSON.stringify({"model": "gpt-3.5-turbo", "messages": [{"role": "system", "content": prompt}], "temperature": 0.99, "max_tokens": 400}),
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                        Authorization:`Bearer ` + keyresp['message'],
                    },
                        }
            ).then((response) => {
                if (response.ok) {
                    response.json().then((json) => {
                        historyoutput.textContent = json.choices[0].message.content.trim();
                    });
                }
                
                historyoutputContainer.style.display = 'block';
                // loadingButton.style.display = 'none';
                // outputContainer.scrollIntoView({ behavior: 'smooth' })
            });
    
            // console.log("Completed!");
    
        });
    }