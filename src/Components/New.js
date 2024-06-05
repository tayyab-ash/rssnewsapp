import React, { useEffect, useState } from 'react';

const New = () => {
    const [rssData, setRssData] = useState(null);

    useEffect(() => {
      const proxyUrl = 'http://localhost:8080/'; 
      const targetUrl = 'http://feeds.bbci.co.uk/news/rss.xml';
  
      fetch(proxyUrl + targetUrl)
        .then(response => response.text())
        .then(xmlString => {
          const parser = new DOMParser();
          const xml = parser.parseFromString(xmlString, 'application/xml');
          const json = xmlToJson(xml);

          console.log('Parsed RSS Data:', json);

          setRssData(json);
        })
        .catch(error => console.error('Error fetching the RSS feed:', error));
    }, []);
  
    const xmlToJson = (xml) => {
      const obj = {};
      if (xml.nodeType === 1) { 
        if (xml.attributes.length > 0) {
          obj["@attributes"] = {};
          for (let j = 0; j < xml.attributes.length; j++) {
            const attribute = xml.attributes.item(j);
            obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
          }
        }
      } else if (xml.nodeType === 4) {
        return xml.nodeValue;
      } else if (xml.nodeType === 3) { 
        return xml.nodeValue.trim();
      }
  
      if (xml.hasChildNodes()) {
        for (let i = 0; i < xml.childNodes.length; i++) {
          const item = xml.childNodes.item(i);
          const nodeName = item.nodeName;
          if (typeof obj[nodeName] === "undefined") {
            obj[nodeName] = xmlToJson(item);
          } else {
            if (typeof obj[nodeName].push === "undefined") {
              const old = obj[nodeName];
              obj[nodeName] = [];
              obj[nodeName].push(old);
            }
            obj[nodeName].push(xmlToJson(item));
          }
        }
      }
      return obj;
    };
  
    const extractTextContent = (node) => {
        if (typeof node === 'string') return node;
        if (node['#text']) return node['#text'];
        if (Array.isArray(node)) return node.map(extractTextContent).join(' ');
        return '';
      };
    
      const renderRssItems = (items) => {
        if (!Array.isArray(items)) {
          items = [items]; // Ensure items is an array
        }
        return items.map((item, index) => (
          <li key={index}>
            <a href={extractTextContent(item.link)}>{extractTextContent(item.title)}</a>
          </li>
        ));
      };
  
    return (
      <div>
        <h1>RSS Feed Data</h1>
        {rssData ? (
          <ul>
            {rssData.rss && rssData.rss.channel && rssData.rss.channel.item && renderRssItems(rssData.rss.channel.item)}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };

export default New;
