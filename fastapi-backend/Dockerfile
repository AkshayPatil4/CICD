FROM python:3.9-slim

WORKDIR /fastapi-backend

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Install pytest for testing
RUN pip install pytest

# Copy application code and test files
COPY . .

EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
