import json

with open('C:/Users/muhammed faris k/.gemini/antigravity-ide/brain/29974104-a26b-4a81-830f-72509e7cdade/.system_generated/logs/transcript.jsonl', 'r', encoding='utf-8') as f:
    for line in f:
        if '"step_index":556,' in line:
            data = json.loads(line)
            print(data['tool_calls'][0]['args'])
