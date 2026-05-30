#!/usr/bin/env python3
"""Geliştirme sunucusu — önbelleğe almaz (her dosya taze gelir)."""
import http.server
import socketserver

PORT = 8765


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
    print(f"No-cache sunucu: http://localhost:{PORT}")
    httpd.serve_forever()
