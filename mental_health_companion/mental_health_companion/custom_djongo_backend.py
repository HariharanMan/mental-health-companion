# custom_djongo_backend.py
from djongo import base

class DatabaseWrapper(base.DatabaseWrapper):
    def _close(self):
        if self.connection is not None:
            self.connection.close()
