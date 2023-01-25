#!/usr/bin/env python3
'''Basic caching module.
'''
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    '''Represents an object that allows storing and
    retrievinf items from a dictionary
    '''

    def put(self, key, item):
        '''Insert an item in to the cache
        '''
        if key is None or item is None:
            return
        self.cache_data[key] = item

    def get(self, key):
        '''Return an item by key.
        '''
        return self.cache_data.get(key, None)
