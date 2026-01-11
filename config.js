// API Configuration
// Backend service URL (automatically configured)
const CONFIG = {
    API_URL: "https://webapi696336e8b64e256bd2977a74-production.up.railway.app"
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
