import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import mindsdb_sdk
from dotenv import load_dotenv
import datetime

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS

MINDSDB_HOST = 'https://cloud.mindsdb.com'
MINDSDB_API_KEY = os.getenv('MINDSDB_API_KEY')

client = OpenAI(
    api_key=MINDSDB_API_KEY,
    base_url="https://llm.mdb.ai/"
)

chat_history = []

def connect_to_mindsdb():
    try:
        print("Attempting to connect to MindsDB...")
        server = mindsdb_sdk.connect(MINDSDB_HOST, api_key=MINDSDB_API_KEY)
        print("Connected to MindsDB!")
        return server
    except Exception as error:
        print(f"Failed to connect to MindsDB. Error: {error}")
        return None

server = connect_to_mindsdb()
if server is None:
    print("Failed to connect to MindsDB. Please check your API key and connection settings.")
    exit(1)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data['message']
    
    chat_history.append({"role": "user", "content": user_message})
    
    response = get_chatbot_response(user_message)
    chat_history.append({"role": "assistant", "content": response})
    
    return jsonify({'response': response})

def get_chatbot_response(user_message):
    try:
        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant specializing in fashion advice. Provide concise and helpful responses."},
                *chat_history,
                {"role": "user", "content": user_message}
            ],
            stream=False
        )
        return completion.choices[0].message.content
    except Exception as e:
        print(f"Error getting chatbot response: {str(e)}")
        return f"An error occurred while processing your request: {str(e)}"

if __name__ == '__main__':
    app.run(debug=True)
