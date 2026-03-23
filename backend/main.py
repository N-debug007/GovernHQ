from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware 

from agents.router import router as agents_router, _AuthError
from core.auth import AuthError
from gate.router import router as gate_router

# FastAPI application entry point
# This initializes the GovernHQ backend service.
# Responsible only for app setup and routing.
app = FastAPI(
    title="GovernHQ Backend",
    version="1.0.0"
)

# CORS Middleware
# Allows frontend (e.g., Vercel React app) to communicate
# with this backend API.

# TEMPORARY:
# allow_origins="*" is used for development/testing.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Route Registration
# Connects API routes to the FastAPI application.
# - agents_router: handles agent registry and management
# - gate_router: handles reasoning evaluation (core Gate logic)
app.include_router(agents_router)
app.include_router(gate_router)


# Legacy Auth Error Handler
# Handles authentication errors raised from older/internal modules
# (e.g., agents.router using _AuthError).

# This is kept temporarily to maintain backward compatibility
# while transitioning all auth handling to core.auth.AuthError.

# TODO: Remove once all modules use AuthError consistently.

@app.exception_handler(_AuthError)
async def legacy_auth_error_handler(request: Request, exc: _AuthError):
    return JSONResponse(
        {"data": None, "error": exc.detail, "status": exc.status},
        status_code=exc.status,
    )


# Primary Auth Error Handler
# Centralized handling of authentication errors across the system.

# - Ensures consistent API response format
# - Keeps authentication logic separate from route handlers
# - Improves frontend integration and debugging

# All auth-related failures should raise AuthError.

@app.exception_handler(AuthError)
async def auth_error_handler(request: Request, exc: AuthError):
    return JSONResponse(
        {"data": None, "error": exc.detail, "status": exc.status},
        status_code=exc.status,
    )


# Health Check Endpoint
# Used by Render to verify service uptime.

# - Returns standardized API response structure (data/error/status)
# - Includes service identifier for debugging and monitoring
@app.get("/health")
async def health():
    return {
        "data": {"ok": True, "service": "governhq-backend"},
        "error": None,
        "status": 200,
    }
