from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


dist = Jinja2Templates(directory="dist")
app.mount("/assets", StaticFiles(directory="dist/assets"), name="assets")

@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return dist.TemplateResponse("index.html", {"request": request})