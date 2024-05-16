/**
 * @file saveToFile.js
 * @description Utility function to save results to a file with a timestamp.
 */

import { writeFile } from "fs/promises";

const saveToFile = async (filename, data) => {
  const timestamp = new Date().toISOString();
  const fileContent = { timestamp, ...data };

  try {
    await writeFile(filename, JSON.stringify(fileContent, null, 2));
  } catch (error) {
    console.error("Error writing to file", error);
  }
};

export default saveToFile;
