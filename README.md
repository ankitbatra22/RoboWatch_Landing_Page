# Landing Page for Capstone (WIP)

## For Running

Install dependencies

    
```bash
npm install
```

Start the server

    
        
```bash
npm run dev
```

Now you can visit https://localhost:3000 in your browser.


## Contribute/Modify Build or Design Logs:
1. **Edit JSON Files**
   - Location: `public/build-log.json` or `public/design-log.json`
   - Add new entries at the start of the array
   - Follow this format:
     ```json
     {
       "date": "YYYY-MM-DD",
       "title": "Entry Title",
       "content": [
         {
           "type": "text",
           "value": "Description"
         },
         {
           "type": "list",
           "items": ["Item 1", "Item 2"]
         },
         {
           "type": "image",
           "src": "/image-path.jpg",
           "alt": "Image description"
         }
       ]
     }
     ```

2. **Submit Changes**

    (example flow:)
    
    `git checkout -b <branch-name>` for example, `git checkout -b update-logs-YYYYMMDD`
   
   `git add .`

   `git commit -m "Update: [Brief description]"`

   `git push origin update-logs-YYYYMMDD`

3. **Preview & Deploy**
   - Create a PR and you will see changes in a staging deployed link
   - Review rendered content
   - Merge PR to main to deploy to production
