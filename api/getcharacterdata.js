export default async function handler(req, res) {
    const { region, realm, name } = req.query;
  
    const apiUrl = `https://era.raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=gear,talents`;
  
    try {
      // Forward the request to Raider.io
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Error fetching data from Raider.io: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      // Return the data to the client
      res.status(200).json(data);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: error.message });
    }
  }
  