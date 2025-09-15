body {
            font-family: 'Roboto', sans-serif;
            background-color: #1a1a1a;
            color: #e0e0e0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
        }
        .container {
            background-color: #2c2c2c;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.4);
            width: 100%;
            max-width: 800px;
            border: 1px solid #444;
        }
        h1 {
            text-align: center;
            color: #4CAF50;
            margin-bottom: 25px;
            font-weight: 700;
        }
        .input-area, .output-area {
            margin-bottom: 25px;
        }
        label {
            display: block;
            margin-bottom: 10px;
            font-weight: 400;
            color: #b0b0b0;
        }
        textarea, input[type="file"] {
            width: 100%;
            padding: 12px;
            border-radius: 6px;
            border: 1px solid #555;
            background-color: #252525;
            color: #e0e0e0;
            font-size: 14px;
            box-sizing: border-box;
            font-family: monospace;
        }
        textarea {
            min-height: 200px;
            resize: vertical;
        }
        button {
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 6px;
            background-color: #4CAF50;
            color: white;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.1s;
        }
        button:hover {
            background-color: #45a049;
        }
        button:active {
            transform: scale(0.98);
        }
        .options {
            background-color: #333;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 25px;
        }
        .options h2 {
            margin-top: 0;
            font-size: 18px;
            color: #ccc;
            border-bottom: 1px solid #555;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .option-group {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }
        .option-group label {
            flex: 1;
            margin: 0;
            color: #ddd;
        }
        .option-group select, .option-group input[type="checkbox"] {
            margin-left: 15px;
        }
        .copy-button {
            display: block;
            width: auto;
            margin-top: 10px;
            padding: 8px 15px;
            background-color: #008CBA;
            float: right;
            font-size: 14px;
        }
        .copy-button:hover {
            background-color: #007B9A;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #777;
        }
