from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

from agents.router import router as agents_router, _AuthError

app = FastAPI(title="GovernHQ Backend")

# Register routers
app.include_router(agents_router)


@app.exception_handler(_AuthError)
async def auth_error_handler(request: Request, exc: _AuthError):
    return JSONResponse(
        {"data": None, "error": exc.detail, "status": exc.status},
        status_code=exc.status,
    )


@app.get("/health")
async def health():
    return {
        "data": {"ok": True, "service": "governhq-backend"},
        "error": None,
        "status": 200,
    }
