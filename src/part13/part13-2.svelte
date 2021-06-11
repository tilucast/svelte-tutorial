<script lang="ts">
import Comment from "./Comment.svelte";
import Project from "./Project.svelte";


</script>

<h1>Projects</h1>

<ul>
    <li>
        <Project
            title="Add typescript support"
            tasksCompleted={25}
            totalTasks={57}
        >
        <div slot="comments">
            <Comment
                name="Ecmascript" postedAt={new Date()}
            >
                <p>Those interface tests are now passing.</p>
            </Comment>
        </div>
        </Project>
    </li>
    <li>
        <Project
            title="Update documentation"
            tasksCompleted={18}
            totalTasks={21}
        />
    </li>
</ul>

<style>
    h1 {
		font-weight: 300;
		margin: 0 1rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0.5rem;
		display: flex;
	}

	@media (max-width: 600px) {
		ul {
			flex-direction: column;
		}
	}

	li {
		padding: 0.5rem;
		flex: 1 1 50%;
		min-width: 200px;
	}
</style>