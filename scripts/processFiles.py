import sys
version = sys.version_info
if version.major < 3 or (version.major == 3 and version.minor < 10):
	raise RuntimeError("This script requires Python 3.10 or higher")
import os
import io
import json
from typing import Any, Iterable

from fileStreams import getFileJsonStream


fileOrFolderPath = sys.argv[-1]
recursive = False

def processRow(row: dict[str, Any]):
	# Do something with the row
	pass

def processFile(path: str):
	jsonStream = getFileJsonStream(path)
	path_out = path.replace("zst", "jsonl")
	assert path != path_out, "broke the assumption of input file's ext to be .zst"
	if jsonStream is None:
		print(f"Skipping unknown file {path}")
		return
	with io.open(path_out, 'w', encoding='utf-8') as f:
		for i, (lineLength, row) in enumerate(jsonStream):
			if i % 10_000 == 0:
				print(f"\rRow {i}", end="")
			#processRow(row)
			#row.replace("\n", "\\n")
			#s = dict(text=row)
			x = json.dumps(row, sort_keys=True, indent=1, ensure_ascii=False)
			f.write(x)
			f.write("\n") # optional
	print(f"\rRow {i+1}")

def processFolder(path: str):
	fileIterator: Iterable[str]
	if recursive:
		def recursiveFileIterator():
			for root, dirs, files in os.walk(path):
				for file in files:
					yield os.path.join(root, file)
		fileIterator = recursiveFileIterator()
	else:
		fileIterator = os.listdir(path)
		fileIterator = (os.path.join(path, file) for file in fileIterator)
	
	for i, file in enumerate(fileIterator):
		print(f"Processing file {i+1: 3} {file}")
		processFile(file)

def main():
	if os.path.isdir(fileOrFolderPath):
		processFolder(fileOrFolderPath)
	else:
		processFile(fileOrFolderPath)
	
	print("Done :>")

if __name__ == "__main__":
	main()
