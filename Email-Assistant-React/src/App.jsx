import { useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import axios from "axios";

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generatedReply, setGeneratedReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:8080/api/email/generate",
        {
          emailContent,
          tone,
        }
      );
      const data = response.data;
      setGeneratedReply(
        typeof data === "string" ? data : JSON.stringify(data, null, 2)
      );
    } catch (err) {
      setError("⚠️ Failed to generate reply. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper
        elevation={5}
        sx={{ p: 5, borderRadius: 4, backgroundColor: "#f9fcff" }}
      >
        <Typography variant="h4" align="center" color="primary" gutterBottom>
          📬 Smart Email Assistant
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 4 }}>
          Generate professional, casual, or friendly replies to any email in
          seconds ✨
        </Typography>

        <Box sx={{ mt: 2 }}>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            label="📨 Paste your email here"
            value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb: 3 }}
          />

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="tone-label">🎯 Select Tone</InputLabel>
            <Select
              labelId="tone-label"
              id="tone"
              value={tone}
              label="🎯 Select Tone"
              onChange={(e) => setTone(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">Professional 🧑‍💼</MenuItem>
              <MenuItem value="casual">Casual 😎</MenuItem>
              <MenuItem value="friendly">Friendly 😊</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            fullWidth
            size="large"
            sx={{ textTransform: "none", py: 1.5, fontWeight: "bold" }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "🚀 Generate Reply"
            )}
          </Button>

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
        </Box>

        {generatedReply && (
          <Box sx={{ mt: 5 }}>
            <Typography variant="h6" gutterBottom>
              📝 Your AI-Generated Reply:
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              value={generatedReply}
              inputProps={{ readOnly: true }}
              sx={{ backgroundColor: "#f4f6f8", borderRadius: 1 }}
            />

            <Button
              variant="outlined"
              sx={{ mt: 2 }}
              onClick={() => navigator.clipboard.writeText(generatedReply)}
            >
              📋 Copy to Clipboard
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default App;
