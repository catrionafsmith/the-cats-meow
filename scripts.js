const nameButton = document.getElementById('fetch-name-btn')
const exploreButton = document.getElementById('explore-btn')
const historyButton = document.getElementById('history-btn')
const pawsButton = document.getElementById('paws-btn')
const output = document.querySelector('.api-output')
const loadingButton = document.getElementById("loadingButton")
const loadingExploreButton = document.getElementById("loadingExploreButton")
const loadingHistoryButton = document.getElementById("loadingHistoryButton")
const loadingPawsButton = document.getElementById("loadingPawsButton")
const outputContainer = document.getElementById("output-container")
const emailButton = document.getElementById('fetch-email-btn')
const exploreoutputContainer = document.getElementById("explore-output-container")
const exploreoutput = document.querySelector('.explore-api-output')
const historyoutputContainer = document.getElementById("history-output-container")
const historyoutput = document.querySelector('.history-api-output')
const pawsoutputContainer = document.getElementById("paws-output-container")
const pawsoutput = document.querySelector('.paws-api-output')

// Function for Name section
if (nameButton) {
    nameButton.addEventListener('click', async () => {
        nameButton.style.display = 'none'
        loadingButton.style.display = 'block'
        // loadingButton.scrollIntoView({ behavior: 'smooth' })
        const nameBreed = document.getElementById("nameBreed").value
        const nameDescription = document.getElementById("nameDescription").value
        const nameColour = document.getElementById("nameColour").value
        const nameGender = document.getElementById("nameGender").value

        const prompt = `You work at CatNameGenius. Here is the About Us section from their website: 'Introducing CatNameGenius - the ultimate software for cat-lovers! Finding the perfect name for your furry friend has never been easier. Our algorithm takes into account your cat's unique personality, breed, and physical attributes to generate a list of customized and personalized names just for them. With CatNameGenius, you'll never have to struggle with naming your cat again. Say goodbye to generic names and hello to a name that truly reflects your cat's one-of-a-kind spirit. Get started today and give your feline companion the purrfect name they deserve!' You are an expert in creating creative and attractive cat names at animal shelters so that animal-lovers will have a connection with them and want to adopt them. Come up with five surprising and unusual names, plus a little bit of explanation about each name. 
        The cat which you are naming is: 
       Breed: ${nameBreed}
       Description: ${nameDescription}
       Colour: ${nameColour} 
       Gender: ${nameGender}
       looking for a loving home`
    
        const keyresp = await fetch('/.netlify/functions/get-token')
        .then(response => response.json()
        )
    
        const response = await fetch(
                `https://api.openai.com/v1/chat/completions`,
                {
                    body: JSON.stringify({"model": "gpt-3.5-turbo-instruct", "messages": [{"role": "system", "content": prompt}], "temperature": 0.99, "max_tokens": 400}),
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
                loadingButton.style.display = 'none';
                // outputContainer.scrollIntoView({ behavior: 'smooth' })
            });
    
            // console.log("Completed!");
    
        });
    }

// Function for Explore section
if (exploreButton) {
    exploreButton.addEventListener('click', async () => {
        loadingExploreButton.style.display = 'block'
        // loadingButton.scrollIntoView({ behavior: 'smooth' })
        const explorecatName = document.getElementById("explorecatName").value
        const exploreBreed = document.getElementById("exploreBreed").value
        const exploreDescription = document.getElementById("exploreDescription").value
        const exploreAge = document.getElementById("exploreAge").value
        const prompt = `You work at a cat shelter, and your job is to write compelling and emotionally-affecting copy about each cat, so that animal-lovers will have a connection with them and want to adopt them. 

        Here are some of the stories that you have written about pets to be adopted:
       
       Story 1: "Blue is an incredibly affectionate, warm and confident young man!
       He is a big love bug who will begin purring the moment you pick him up! Cuddles with Blue are the best therapy.
       Blue is equally as happy to play. He would fit in perfectly in any home!
       Blue is a curious, happy and confident cat that would suit a house with a loving family!"
       
       Story 2: "Dougal might come off as a bit shy when you first meet him but don’t be fooled, he is incredibly quick to warm up and dote on you!
       Dougal has a very calm, charismatic and playful presence. He loves to be picked up and cuddled which makes him a great companion pet.
       If his personality isn’t enough, Dougal also has a gorgeous multicoloured coat with big adoring eyes that match his calm, warm and loving presence!"
       
       Story 3: "Once you go Jack you’ll never go back!
       This handsome hunk takes a little bit of time to warm up to people, but once he does he’s an affectionate little angel. The way to his heart is through his stomach and he’ll become quick friends with anyone who offers him a delicious treat. He is more of a ladies man so would need to meet everyone in the family.
       His sweet meow and chubby cheeks are sure to melt the heart of any cat lover. Come in and see if you can resist his charms!"
       
       You are a marketing and content-creation expert who writes descriptions of animals who are currently in animal shelters so that animal-lovers will have a connection with them and want to adopt them. 
       
       Come up with a heart-warming and compelling story about the animal below:
       Name: ${explorecatName}
       Breed: ${exploreBreed}
       Description: ${exploreDescription}
       Age: ${exploreAge} `

    
        const keyresp = await fetch('/.netlify/functions/get-token')
        .then(response => response.json()
        )
    
        const response = await fetch(
                `https://api.openai.com/v1/chat/completions`,
                {
                    body: JSON.stringify({"model": "gpt-3.5-turbo-instruct", "messages": [{"role": "system", "content": prompt}], "temperature": 0.99, "max_tokens": 400}),
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
                loadingExploreButton.style.display = 'none';
                // outputContainer.scrollIntoView({ behavior: 'smooth' })
            });
    
            // console.log("Completed!");
    
        });
    }


// Function for History section
if (historyButton) {
    historyButton.addEventListener('click', async () => {
        loadingHistoryButton.style.display = 'block'
        // loadingButton.scrollIntoView({ behavior: 'smooth' })
        const historycatName = document.getElementById("historycatName").value
        const prompt = `You run CatPastLives - the ultimate software for cat lovers who want to discover the mysterious past lives of their beloved feline companions. Your innovative technology uses advanced algorithms to tap into the spiritual realm, revealing your cat's previous incarnations and the lessons they learned in each life. A user simply needs to input their cat's name, and within moments, they'll receive a detailed report on their past lives, including their personalities, experiences, and even their relationships with their past owners. Users will unleash the mysteries of their cat's soul and gain a deeper understanding of their unique spirit. With CatPastLives, users can discover a new level of connection with their feline companion. Now write a CatPastLife report for a cat named ${historycatName}`

    
        const keyresp = await fetch('/.netlify/functions/get-token')
        .then(response => response.json()
        )
    
        const response = await fetch(
                `https://api.openai.com/v1/chat/completions`,
                {
                    body: JSON.stringify({"model": "gpt-3.5-turbo-instruct", "messages": [{"role": "system", "content": prompt}], "temperature": 0.99, "max_tokens": 400}),
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
                loadingHistoryButton.style.display = 'none';
                // outputContainer.scrollIntoView({ behavior: 'smooth' })
            });
    
            // console.log("Completed!");
    
        });
    }

    // Function for the Big Paws...
if (pawsButton) {
    pawsButton.addEventListener('click', async () => {
        loadingPawsButton.style.display = 'block'
        // loadingButton.scrollIntoView({ behavior: 'smooth' })
        // const historycatName = document.getElementById("historycatName").value
        const prompt = `You run CatPastLives - the ultimate software for cat lovers who want to discover the amazing body parts past lives of their beloved feline companions. Your innovative technology uses advanced algorithms to figure out the best body parts of each cat. Return a sparkling report on the best body part of a cat named BillyBob`

    
        const keyresp = await fetch('/.netlify/functions/get-token')
        .then(response => response.json()
        )
    // app.post('/api/openai', async (req, res) => {
    //     const { message } = req.body;
        
    //     // store user message in global message state
    //     const userMessage = { role: "user", content: message };
    
    //     // add to global messages list
    //     global.messages.push(userMessage);
    
        // send a request to the OpenAI API with the user's message
        // using the node-fetch library
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                // notice how we're using process.env here
                // this is using the environment variable from the .env file
                // "content-type": "application/json",
                // "Authorization" :`Bearer ` + keyresp['message'],
                'Authorization': `Bearer ` + keyresp['message'],
                'Content-Type': 'application/json',
            },
            // construct the request payload
            // using the entire chat history (global.messages)
            // sending an external request to the OpenAI API
            body: JSON.stringify({
                model: 'gpt-3.5-turbo-instruct',
                messages: [{"role": "system", "content": prompt}],
                // the maximum number of tokens/words the bot should return
                // in response to a given prompt
                max_tokens: 400,
            }),
        });
        
        if (!response.ok) {
            // if the request was not successful, parse the error
            const error = await response.json();
    
            // log the error for debugging purposes
            console.error('OpenAI API Error:', error);
    
            // return an error response to the client
            // return pawsoutput.textContent.json({ status: 'error', data: null });
        }
        
        // parse the response from OpenAI as json
        const data = await response.json();
    
        // get the bot's answer from the OpenAI API response
        // const botAnswer = data?.choices?.[0]?.message?.content
        pawsoutput.textContent = data?.choices?.[0]?.message?.content
        pawsoutputContainer.style.display = 'block';
        loadingPawsButton.style.display = 'none';
        // pastoutput.textContent = json.choices[0].message.content.trim()
    
        // create the bot message object
        // const botMessage = { role: "assistant", content: botAnswer };
    
        // // store bot message in global message state
        // global.messages.push(botMessage);
    
        // // send the bot's answer back to the client
        // return res.json({ status: 'success', data: botAnswer });
    })}

    window.addEventListener('load', function() {
        var bunny = document.getElementById('bunny');
        bunny.classList.add('bounce');
      });