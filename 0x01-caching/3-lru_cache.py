#!/usr/bin/python3
'''LRU Caching
'''
from base_caching import BaseCaching


class LRUCache(BaseCaching):
    '''Represents least recently used caching object
    inherited from BaseCaching class
    '''

    def __init__(self):
        '''Intilizes the oject
        '''
        super().__init__()
        self.queue = []

    def put(self, key, item):
        '''Inserts an item in to the cach_date usding
        the LRU technique
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
        '''Returns the cache data which are linked to the key
        '''

        if key is None or key not in self.cache_data:
            return None

        self.queue.remove(key)
        self.queue.append(key)

        return self.cache_data[key]
