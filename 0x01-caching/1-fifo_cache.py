#!/usr/bin/env python3
'''First-In First-Out caching module.
'''
from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    '''Represents an object that allows storing and
    retriving items from a dictionary with a FIFO
    removal mechanism when the limit is reached.
    '''

    def __init__(self):
        '''Initilizes the cache.
        '''
        super().__init__()
        self.queue = []

    def put(self, key, item):
        '''Inserts an item in the cache
        '''
        if key is None or item is None:
            return

        if len(self.cache_data) >= self.MAX_ITEMS:
            tobe_discard = self.queue.pop(0)
            print('DISCARD: {}'.format(tobe_discard))
            del self.cache_data[tobe_discard]

        self.queue.append(key)
        self.cache_data[key] = item

    def get(self, key):
        '''Retrives an item by key.
        '''
        return self.cache_data.get(key, None)
