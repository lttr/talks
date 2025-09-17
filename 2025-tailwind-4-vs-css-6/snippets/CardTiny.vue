<template>
  <div class="card p-flow">
    <h2 class="heading">Project</h2>
    <p class="description">Enter new project name</p>
    <div class="form-field">
      <label for="name" class="p-secondary-text-bold">Name</label>
      <input id="name" type="text" />
    </div>
    <div class="p-cluster">
      <button>Cancel</button>
      <button>Submit</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: var(--radius-2);
  padding: var(--space-4);
  box-shadow: var(--shadow-4);
}

.heading {
  font-size: var(--font-size-0);
}

.description {
  font-size: var(--font-size--1);
  font-weight: var(--font-weight-light);
}

.form-field {
  display: grid;
  gap: var(--space-1);
}
</style>
