/**
 * Portfolio Interactive Scripts for Shaik Mohammed Jasim
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Terminal Tabs Switcher
  const terminalTabs = document.querySelectorAll('.terminal-tab');
  const terminalContent = document.getElementById('terminal-code-body');
  const terminalFileLabel = document.getElementById('terminal-file-label');

  const codeSnippets = {
    'profile': {
      filename: '~/dev/jasim-profile.json',
      content: `
<div class="flex"><span class="text-slate-600 w-6 select-none">01</span><span><span class="token-keyword">const</span> <span class="token-var">developerProfile</span> = {</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">02</span><span class="pl-4"><span class="token-var">name</span>: <span class="token-string">"Shaik Mohammed Jasim"</span>,</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">03</span><span class="pl-4"><span class="token-var">role</span>: <span class="token-string">"Aspiring Software Developer &amp; AI Engineer"</span>,</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">04</span><span class="pl-4"><span class="token-var">institution</span>: <span class="token-string">"SRM University"</span>,</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">05</span><span class="pl-4"><span class="token-var">degree</span>: <span class="token-string">"B.Tech CSE (Specialization in AI &amp; ML)"</span>,</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">06</span><span class="pl-4"><span class="token-var">academicYears</span>: <span class="token-string">"2025 - 2029"</span>,</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">07</span><span class="pl-4"><span class="token-var">languages</span>: [<span class="token-string">"Python"</span>, <span class="token-string">"Java"</span>, <span class="token-string">"C"</span>, <span class="token-string">"C++"</span>, <span class="token-string">"JavaScript"</span>],</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">08</span><span class="pl-4"><span class="token-var">interests</span>: [<span class="token-string">"AI &amp; Machine Learning"</span>, <span class="token-string">"Algorithms &amp; DSA"</span>, <span class="token-string">"Web Development"</span>],</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">09</span><span class="pl-4"><span class="token-var">status</span>: <span class="token-string">"Actively Seeking Internships"</span>,</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">10</span><span class="pl-4"><span class="token-var">availableForCollab</span>: <span class="token-keyword">true</span></span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">11</span><span>};</span></div>
<div class="flex pt-2 text-slate-500"><span class="text-slate-600 w-6 select-none">12</span><span class="flex items-center gap-1"><span class="text-cyan-400">$</span> echo $READY_FOR_INTERNSHIP &amp;&amp; jasim.deploy() <span class="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1"></span></span></div>`
    },
    'python': {
      filename: '~/algorithms/binary_search.py',
      content: `
<div class="flex"><span class="text-slate-600 w-6 select-none">01</span><span><span class="token-comment"># Optimized Binary Search in Python</span></span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">02</span><span><span class="token-keyword">def</span> <span class="token-func">binary_search</span>(arr: list[int], target: int) -> int:</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">03</span><span class="pl-4">low, high = <span class="token-number">0</span>, len(arr) - <span class="token-number">1</span></span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">04</span><span class="pl-4"><span class="token-keyword">while</span> low &lt;= high:</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">05</span><span class="pl-8">mid = (low + high) // <span class="token-number">2</span></span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">06</span><span class="pl-8"><span class="token-keyword">if</span> arr[mid] == target:</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">07</span><span class="pl-12"><span class="token-keyword">return</span> mid</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">08</span><span class="pl-8"><span class="token-keyword">elif</span> arr[mid] &lt; target:</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">09</span><span class="pl-12">low = mid + <span class="token-number">1</span></span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">10</span><span class="pl-8"><span class="token-keyword">else</span>:</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">11</span><span class="pl-12">high = mid - <span class="token-number">1</span></span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">12</span><span class="pl-4"><span class="token-keyword">return</span> -<span class="token-number">1</span></span></div>
<div class="flex pt-1"><span class="text-slate-600 w-6 select-none">13</span><span><span class="token-func">print</span>(<span class="token-string">"Target found at index:"</span>, <span class="token-func">binary_search</span>([<span class="token-number">2</span>, <span class="token-number">4</span>, <span class="token-number">8</span>, <span class="token-number">16</span>, <span class="token-number">32</span>], <span class="token-number">16</span>))</span></div>`
    },
    'java': {
      filename: '~/systems/StudentManager.java',
      content: `
<div class="flex"><span class="text-slate-600 w-6 select-none">01</span><span><span class="token-keyword">public class</span> <span class="token-var">StudentManager</span> {</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">02</span><span class="pl-4"><span class="token-keyword">private</span> Map&lt;String, Student&gt; registry = <span class="token-keyword">new</span> HashMap&lt;&gt;();</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">03</span><span class="pl-4"><span class="token-keyword">public void</span> <span class="token-func">register</span>(Student s) {</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">04</span><span class="pl-8">registry.put(s.getId(), s);</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">05</span><span class="pl-8">System.out.println(<span class="token-string">"[SUCCESS] Enrolled: "</span> + s.getName());</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">06</span><span class="pl-4">}</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">07</span><span class="pl-4"><span class="token-keyword">public static void</span> <span class="token-func">main</span>(String[] args) {</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">08</span><span class="pl-8">StudentManager app = <span class="token-keyword">new</span> StudentManager();</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">09</span><span class="pl-8">app.register(<span class="token-keyword">new</span> Student(<span class="token-string">"Shaik Mohammed Jasim"</span>, <span class="token-string">"SRM-2025"</span>));</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">10</span><span class="pl-4">}</span></div>
<div class="flex"><span class="text-slate-600 w-6 select-none">11</span><span>}</span></div>`
    }
  };

  terminalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      terminalTabs.forEach(t => {
        t.classList.remove('bg-purple-950/40', 'text-purple-300', 'border-purple-500/50');
        t.classList.add('text-slate-400');
      });
      tab.classList.add('bg-purple-950/40', 'text-purple-300', 'border-purple-500/50');
      tab.classList.remove('text-slate-400');

      const target = tab.getAttribute('data-tab');
      if (codeSnippets[target] && terminalContent) {
        terminalContent.innerHTML = codeSnippets[target].content;
        if (terminalFileLabel) {
          terminalFileLabel.textContent = codeSnippets[target].filename;
        }
      }
    });
  });

  // 3. Project Filter Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-purple-600', 'text-white', 'shadow-lg', 'shadow-purple-600/30');
        b.classList.add('bg-slate-800/80', 'text-slate-300');
      });
      btn.classList.add('bg-purple-600', 'text-white', 'shadow-lg', 'shadow-purple-600/30');
      btn.classList.remove('bg-slate-800/80', 'text-slate-300');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Algorithm Visualizer Interactive Mini-Demo
  const sortBarsContainer = document.getElementById('sort-bars-container');
  const runSortBtn = document.getElementById('run-sort-btn');
  const resetSortBtn = document.getElementById('reset-sort-btn');
  let currentBars = [45, 80, 25, 95, 60, 30, 70, 50, 85, 40, 65, 100];
  let isSorting = false;

  function renderBars(bars, activeIndices = [], sortedIndices = []) {
    if (!sortBarsContainer) return;
    sortBarsContainer.innerHTML = '';
    bars.forEach((val, idx) => {
      const bar = document.createElement('div');
      bar.className = 'flex-1 rounded-t transition-all duration-150';
      bar.style.height = `${val}%`;

      if (sortedIndices.includes(idx)) {
        bar.className += ' bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]';
      } else if (activeIndices.includes(idx)) {
        bar.className += ' bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]';
      } else {
        bar.className += ' bg-purple-500/50 hover:bg-purple-400';
      }
      sortBarsContainer.appendChild(bar);
    });
  }

  renderBars(currentBars);

  async function bubbleSort(arr) {
    isSorting = true;
    let n = arr.length;
    let sorted = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isSorting) return;
        renderBars(arr, [j, j + 1], sorted);
        await new Promise(r => setTimeout(r, 60));
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          renderBars(arr, [j, j + 1], sorted);
          await new Promise(r => setTimeout(r, 60));
        }
      }
      sorted.push(n - i - 1);
    }
    renderBars(arr, [], arr.map((_, idx) => idx));
    isSorting = false;
  }

  if (runSortBtn) {
    runSortBtn.addEventListener('click', () => {
      if (!isSorting) {
        bubbleSort(currentBars);
      }
    });
  }

  if (resetSortBtn) {
    resetSortBtn.addEventListener('click', () => {
      isSorting = false;
      currentBars = Array.from({ length: 12 }, () => Math.floor(Math.random() * 80) + 20);
      renderBars(currentBars);
    });
  }

  // 5. Copy to Clipboard Functionality
  window.copyToClipboard = function(text, elementId) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied "${text}" to clipboard!`);
      const el = document.getElementById(elementId);
      if (el) {
        const originalText = el.innerHTML;
        el.innerHTML = '<span class="material-symbols-outlined text-emerald-400 text-[18px]">check</span> Copied!';
        setTimeout(() => {
          el.innerHTML = originalText;
        }, 2000);
      }
    }).catch(err => {
      console.error('Copy failed:', err);
    });
  };

  // 6. Toast Notification Helper
  function showToast(message) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.className = 'fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-900 border border-purple-500/40 text-slate-100 shadow-2xl backdrop-blur-lg transform transition-all duration-300 translate-y-10 opacity-0';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="material-symbols-outlined text-cyan-400 text-[20px]">check_circle</span> <span class="text-sm font-medium">${message}</span>`;
    toast.classList.remove('translate-y-10', 'opacity-0');
    setTimeout(() => {
      toast.classList.add('translate-y-10', 'opacity-0');
    }, 2800);
  }

  // 7. Interactive Contact Form Submission Handler
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value || 'Friend';
      showToast(`Thank you, ${name}! Your message has been sent to Jasim.`);
      contactForm.reset();
    });
  }
});
