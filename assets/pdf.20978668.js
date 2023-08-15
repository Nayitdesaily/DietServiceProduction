const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABdCAYAAADzCKvfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODA4M0IxNEM4MzdEODk1OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTY5RDZFNjk2NDUxMUU5QjgzM0NGNjBGOUVEM0JBMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQTY5RDZFNTk2NDUxMUU5QjgzM0NGNjBGOUVEM0JBMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDExNzQwNzIwNjgxMTgwODNCMTRDODM3RDg5NTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgwODNCMTRDODM3RDg5NTgiLz4gPC9yZGY6RGVzY3Jp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";export{A as p};
