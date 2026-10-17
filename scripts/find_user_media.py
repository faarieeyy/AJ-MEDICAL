import json

with open('C:/Users/muhammed faris k/.gemini/antigravity-ide/brain/29974104-a26b-4a81-830f-72509e7cdade/.system_generated/logs/transcript_full.jsonl', 'r', encoding='utf-8') as f:
    for line in f:
        if '"step_index":1059' in line:
            obj = json.loads(line)
            print("--- STEP 1059 CONTENT ---")
            print(repr(obj.get('content')))
