class Node {
	constructor(data, priority) {
		this.priority = priority;
		this.data = data;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left && this.right) return;
		if (this.left) {
			this.right = node;
			this.right.parent = this;
		} else {
			this.left = node;
			this.left.parent = this;
		}
	}

	removeChild(node) {
		if (this.left == node) {
			this.left.parent = null;
			this.left = null;
			return;
		} 
		if (this.right == node) {
			this.right.parent = null;
			this.right = null;
			return;
		}
		throw new Error('Passed node is not a child of this node');
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
