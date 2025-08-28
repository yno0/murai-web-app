import React, { useState } from 'react';
import { Save, Plus, X, Eye, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';

export default function Extension() {
  const [syncStatus, setSyncStatus] = useState({
    lastSync: new Date(Date.now() - 3600000).toISOString(), // Example: 1 hour ago
    status: 'synced', // 'synced', 'syncing', 'error'
  });

  const handleSync = () => {
    setSyncStatus(prev => ({ ...prev, status: 'syncing' }));
    // TODO: Implement actual sync logic here
    setTimeout(() => {
      setSyncStatus({
        lastSync: new Date().toISOString(),
        status: 'synced'
      });
    }, 1500); // Simulated sync delay
  };

  const [settings, setSettings] = useState({
    enabled: true,
    language: 'english',
    sensitivity: 'medium',
    flaggingStyle: 'blur',
    highlightColor: '#FF4444',
    whitelist: {
      websites: [],
      terms: []
    },
    dictionary: []
  });

  const [newWebsite, setNewWebsite] = useState('');
  const [newTerm, setNewTerm] = useState('');
  const [newWord, setNewWord] = useState('');

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const addToList = (type, value) => {
    if (!value.trim()) return;
    
    setSettings(prev => ({
      ...prev,
      [type]: type === 'dictionary' 
        ? [...prev[type], value.trim()]
        : {
            ...prev[type],
            [type === 'whitelist' ? 'websites' : 'terms']: [
              ...prev[type][type === 'whitelist' ? 'websites' : 'terms'],
              value.trim()
            ]
          }
    }));

    // Clear input field
    if (type === 'whitelist') setNewWebsite('');
    else if (type === 'dictionary') setNewWord('');
    else setNewTerm('');
  };

  const removeFromList = (type, index) => {
    setSettings(prev => ({
      ...prev,
      [type]: type === 'dictionary'
        ? prev[type].filter((_, i) => i !== index)
        : {
            ...prev[type],
            [type === 'whitelist' ? 'websites' : 'terms']: prev[type][type === 'whitelist' ? 'websites' : 'terms']
              .filter((_, i) => i !== index)
          }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement settings save logic
    console.log('Saving settings:', settings);
  };

  return (
    <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-3 py-2">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-medium text-gray-900">Extension Settings</h1>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <div className="flex items-center text-sm">
                  {syncStatus.status === 'synced' && <CheckCircle className="w-4 h-4 text-[#015763] mr-2" />}
                  {syncStatus.status === 'syncing' && <RefreshCw className="w-4 h-4 text-[#015763] animate-spin mr-2" />}
                  {syncStatus.status === 'error' && <AlertCircle className="w-4 h-4 text-red-500 mr-2" />}
                  <span className="font-medium text-gray-900">
                    {syncStatus.status === 'synced' && 'Settings Synced'}
                    {syncStatus.status === 'syncing' && 'Syncing...'}
                    {syncStatus.status === 'error' && 'Sync Error'}
                  </span>
                </div>
                <span className="text-xs text-gray-500 mt-0.5">
                  Last synced: {new Date(syncStatus.lastSync).toLocaleString()}
                </span>
              </div>
              <button
                type="button"
                onClick={handleSync}
                disabled={syncStatus.status === 'syncing'}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 bg-white hover:bg-gray-100 h-9 px-4 py-2"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${syncStatus.status === 'syncing' ? 'animate-spin' : ''}`} />
                Sync Now
              </button>
            </div>
          </div>
          <div className="border-b border-gray-200 -mx-6 mb-6"></div>

          <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Settings */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Basic Settings</h2>
                <p className="text-gray-500 mt-1">Configure fundamental extension behavior</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-sm font-medium ${settings.enabled ? 'text-[#015763]' : 'text-gray-500'}`}>
                  {settings.enabled ? 'Active' : 'Inactive'}
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.enabled}
                    onChange={(e) => handleSettingChange('enabled', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#015763] peer-focus:ring-offset-2 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#015763]"></div>
                </label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Language Selection */}
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="flex flex-col gap-1.5 mb-4">
                  <label className="text-sm font-medium text-gray-900">Language</label>
                  <p className="text-sm text-gray-500">Select the language for content monitoring</p>
                </div>
                <select
                  value={settings.language}
                  onChange={(e) => handleSettingChange('language', e.target.value)}
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="english">English</option>
                  <option value="tagalog">Tagalog</option>
                  <option value="mixed">Mixed (English & Tagalog)</option>
                </select>
              </div>

              {/* Sensitivity Level */}
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="flex flex-col gap-1.5 mb-4">
                  <label className="text-sm font-medium text-gray-900">Sensitivity Level</label>
                  <p className="text-sm text-gray-500">Adjust how strictly content is filtered</p>
                </div>
                <select
                  value={settings.sensitivity}
                  onChange={(e) => handleSettingChange('sensitivity', e.target.value)}
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="low">Low - Only flag explicit content</option>
                  <option value="medium">Medium - Balanced filtering</option>
                  <option value="high">High - Strict content filtering</option>
                </select>
              </div>
            </div>
          </div>

          {/* Flagging Style Settings */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">Content Flagging</h2>
              <p className="text-gray-500 mt-1">Customize how flagged content appears</p>
            </div>
            
            {/* Preview Section */}
            <div className="rounded-lg border border-gray-200 p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-[#015763]" />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Live Preview</h3>
                  <p className="text-sm text-gray-500">See how your content will appear when flagged</p>
                </div>
              </div>
              <div className="bg-[#FAFCFF] p-6 rounded-lg">
                <p className="text-base text-gray-900 leading-relaxed">
                  This is a sample text with{' '}
                  {settings.flaggingStyle === 'blur' && (
                    <span className="filter blur-[4px] bg-gray-100 px-2">flagged content</span>
                  )}
                  {settings.flaggingStyle === 'highlight' && (
                    <span style={{ backgroundColor: settings.highlightColor }} className="px-2">flagged content</span>
                  )}
                  {settings.flaggingStyle === 'asterisk' && (
                    <span className="px-2">**************</span>
                  )}
                  {settings.flaggingStyle === 'underline' && (
                    <span style={{ textDecoration: 'underline', textDecorationColor: settings.highlightColor, textDecorationThickness: '2px' }} className="px-2">
                      flagged content
                    </span>
                  )}
                  {settings.flaggingStyle === 'none' && (
                    <span className="px-2">flagged content</span>
                  )}
                  {' '}in context. You can customize how sensitive content appears using the settings below.
                </p>
              </div>
            </div>

            {/* Settings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Style Selection */}
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="flex flex-col gap-1.5 mb-4">
                  <label className="text-sm font-medium text-gray-900">Flagging Style</label>
                  <p className="text-sm text-gray-500">Choose how to display flagged content</p>
                </div>
                <select
                  value={settings.flaggingStyle}
                  onChange={(e) => handleSettingChange('flaggingStyle', e.target.value)}
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="blur">Blur Content</option>
                  <option value="highlight">Highlight Content</option>
                  <option value="asterisk">Replace with Asterisks</option>
                  <option value="underline">Underline Content</option>
                  <option value="none">No Visual Change</option>
                </select>
              </div>

              {/* Color Picker */}
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="flex flex-col gap-1.5 mb-4">
                  <label className="text-sm font-medium text-gray-900">Highlight Color</label>
                  <p className="text-sm text-gray-500">Select color for highlights and underlines</p>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="color"
                    value={settings.highlightColor}
                    onChange={(e) => handleSettingChange('highlightColor', e.target.value)}
                    className="h-10 w-20 rounded-md cursor-pointer border border-gray-200"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">{settings.highlightColor.toUpperCase()}</span>
                    <span className="text-xs text-gray-500">Click to change</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Whitelist Settings */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">Whitelist Settings</h2>
              <p className="text-gray-500 mt-1">Manage exceptions for websites and terms</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Websites */}
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="flex flex-col gap-1.5 mb-4">
                  <label className="text-sm font-medium text-gray-900">Whitelisted Websites</label>
                  <p className="text-sm text-gray-500">Add websites to exclude from monitoring</p>
                </div>
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={newWebsite}
                    onChange={(e) => setNewWebsite(e.target.value)}
                    placeholder="e.g., example.com"
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={() => addToList('whitelist', newWebsite)}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#015763] text-white hover:bg-[#015763]/90 h-10 px-4 py-2"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add
                  </button>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                  {settings.whitelist.websites.map((website, index) => (
                    <div key={index} className="flex items-center justify-between bg-[#FAFCFF] px-4 py-2.5 rounded-md border border-gray-200">
                      <span className="text-sm font-medium text-gray-900">{website}</span>
                      <button
                        type="button"
                        onClick={() => removeFromList('whitelist', index)}
                        className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-md transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms */}
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="flex flex-col gap-1.5 mb-4">
                  <label className="text-sm font-medium text-gray-900">Whitelisted Terms</label>
                  <p className="text-sm text-gray-500">Add terms to exclude from flagging</p>
                </div>
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={newTerm}
                    onChange={(e) => setNewTerm(e.target.value)}
                    placeholder="Enter term to whitelist"
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={() => addToList('whitelist', newTerm)}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#015763] text-white hover:bg-[#015763]/90 h-10 px-4 py-2"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add
                  </button>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                  {settings.whitelist.terms.map((term, index) => (
                    <div key={index} className="flex items-center justify-between bg-[#FAFCFF] px-4 py-2.5 rounded-md border border-gray-200">
                      <span className="text-sm font-medium text-gray-900">{term}</span>
                      <button
                        type="button"
                        onClick={() => removeFromList('whitelist', index)}
                        className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-md transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Dictionary Settings */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">Word Dictionary</h2>
              <p className="text-gray-500 mt-1">Manage custom words to be flagged</p>
            </div>
            
            <div className="rounded-lg border border-gray-200 p-6">
              <div className="flex flex-col gap-1.5 mb-4">
                <label className="text-sm font-medium text-gray-900">Add Words to Dictionary</label>
                <p className="text-sm text-gray-500">Enter words that should be flagged when detected</p>
              </div>
              
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  value={newWord}
                  onChange={(e) => setNewWord(e.target.value)}
                  placeholder="Enter word or phrase to flag"
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() => addToList('dictionary', newWord)}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#015763] text-white hover:bg-[#015763]/90 h-10 px-4 py-2"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add
                </button>
              </div>

              <div className="rounded-lg border border-gray-200 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[240px] overflow-y-auto pr-2">
                  {settings.dictionary.map((word, index) => (
                    <div key={index} className="flex items-center justify-between bg-[#FAFCFF] px-4 py-2.5 rounded-md border border-gray-200">
                      <span className="text-sm font-medium text-gray-900">{word}</span>
                      <button
                        type="button"
                        onClick={() => removeFromList('dictionary', index)}
                        className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-md transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                {settings.dictionary.length === 0 && (
                  <p className="text-center text-gray-500 text-sm py-4">No words added to dictionary yet</p>
                )}
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Save Changes</h3>
              <p className="text-sm text-gray-500 mt-1">Apply all changes to your extension settings</p>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015763] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#015763] text-white hover:bg-[#015763]/90 h-10 px-4 py-2"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
