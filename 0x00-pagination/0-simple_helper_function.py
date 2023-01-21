#!/usr/bin/env python3
'''Task-0's module
'''
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    startIndex = (page - 1) * page_size
    endIndex = page * page_size
    return (startIndex, endIndex)
