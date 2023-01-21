#!/usr/bin/env python3
'''Task-0's module
'''
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    '''Retrives the index range from a given page and page size
    '''
    startIndex = (page - 1) * page_size
    endIndex = startIndex + page_size
    return (startIndex, endIndex)
