<Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
  <DialogTitle>{this.state.tid}</DialogTitle>
  <DialogContent>
    <DialogContentText>1-2-3-4-5</DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button color="primary" onClick={this.handleRequestClose}>
      OK
    </Button>
  </DialogActions>
</Dialog>