// app/api/upload/route.js

import unzipper from "unzipper";
import fs from "fs";
import path from "path";
import lighthouse from "@lighthouse-web3/sdk";

export async function POST(req) {
  try {
    const file = req.files["file"];
    console.log(file);

    //     // Create a temporary directory
    //     const tempDir = path.join(process.cwd(), 'temp');
    //     if (!fs.existsSync(tempDir)) {
    //       fs.mkdirSync(tempDir, { recursive: true });
    //     }

    //     // Extract the contents of the zip file to the subdirectory
    //     await unzipper.Open.file(file.path)
    //         .then(zip => zip.extract({ path: tempDir }));

    //     // Upload the extracted folder to Lighthouse
    //     const output = await lighthouse.upload(extractDir, apiKey);

    //     // Delete the temporary directory after upload
    //     fs.rmdirSync(tempDir, { recursive: true });

    // Return the result to the client
    return new Response(JSON.stringify({ cid: output.data.Hash }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // console.error('Error handling zip file upload:', error);
    // return new Response(JSON.stringify({ error: 'Internal server error' }), {
    //   status: 500,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
