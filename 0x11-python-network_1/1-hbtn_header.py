#!/usr/bin/python3
<<<<<<< HEAD
"""
Script that takes in a URL, sends a request to the URL and displays the value
of the X-Request-Id variable found in the header of the response.
"""
from urllib.request import Request, urlopen
from sys import argv

if __name__ == "__main__":
    with urlopen(Request(argv[1])) as resp:
        print(resp.headers.get('X-Request-Id'))
=======
"""Takes in a URL, sends a request to the URL
and displays the value of the `X-Request-Id`
variable found in the header of the response.
"""

from sys import argv
from urllib.request import Request, urlopen


if __name__ == "__main__":
    req = Request(argv[1])

    with urlopen(req) as res:
        headers = res.info()
        print(headers.get('X-Request-Id'))
>>>>>>> 7f28b48 (fix)
