import requests

api_url = "http://localhost:3000/api/reset"

dummy_posts = [
    {
        'prompt': '🚀 Excited about space exploration? What\'s your favorite celestial body and why? Share your cosmic curiosity!',
        'userId': "658c8310424405d642cce1a1",
        'tag': '#SpaceExploration'
    },
    {
        'prompt': '🌍 Climate change concerns us all. How do you contribute to a greener planet in your daily life?',
        'userId': "658c8310424405d642cce1a1",
        'tag': '#ClimateAction'
    },
    {
        'prompt': 'Bookworms, unite! Which book characters have left a lasting impact on you? Discuss your literary favorites.',
        'userId': "658c8310424405d642cce1a1",
        'tag': '#BookClub'
    },
    {
        'prompt': '🍲 Foodies assemble! Share your go-to comfort meal and the memories it brings.',
        'userId': "658c8310424405d642cce1a1",
        'tag': '#FoodieTalk'
    },
    {
        'prompt': '🎨 Art lovers, unite! Share your favorite art piece and the emotions it evokes in you.',
        'userId': "658c8310424405d642cce1a1",
        'tag': '#ArtAppreciation'
    },
    {
        'prompt': '💻 Tech enthusiasts, what\'s your favorite gadget and how has it changed your life?',
        'userId': "65907a833678b798991bfbbd",
        'tag': '#TechTalk'
    },
    {
        'prompt': '🎸 Music is a universal language. Share a song that always lifts your spirits.',
        'userId': "65907a833678b798991bfbbd",
        'tag': '#MusicLovers'
    },
    {
        'prompt': '🏞️ Nature lovers, what\'s your favorite outdoor activity to connect with the environment?',
        'userId': "65907a833678b798991bfbbd",
        'tag': '#NatureConnection'
    }
]

try:
    response = requests.delete(api_url)
    print(f"DELETE Response: {response}")
    response = requests.post(api_url, json=dummy_posts)
    print(f"POST Response: {response}")
    

except Exception as e:
    print(f"Error: {e}")
