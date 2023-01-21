#!/usr/bin/env python3
'''Task-0's module
'''


def index_range(page, page_size):
    startIndex = (page - 1) * page_size
    endIndex = page * page_size
    return (startIndex, endIndex)
