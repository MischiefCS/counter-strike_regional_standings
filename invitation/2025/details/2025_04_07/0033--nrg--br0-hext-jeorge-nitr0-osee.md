### Roster Details<br />
Team Name: NRG<br />
Roster: br0, HexT, Jeorge, nitr0, oSee<br />
Global Rank: [33](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [8]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  940.9<br />
<br />
Final Rank Value (940.9) = Starting Rank Value (929.6) + Head To Head Adjustments (11.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.407[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.297[<sup>2</sup>](#table1)

The average of these factors is 0.256<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 929.6
- 400 + ( ( 0.256 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 929.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      267 | 2025-02-14 | M80               | L   | 0.851      | -            | -                | -                | -         |   -18.35 | br0, HexT, Jeorge, nitr0, oSee       |
|           20 |      291 | 2025-02-13 | Exceritus         | W   | 0.845      | 0.143        | -                | 0.200 (0.024)    | 0 (0.000) |     2.21 | br0, HexT, Jeorge, nitr0, oSee       |
|           19 |      301 | 2025-02-12 | Nouns Esports     | W   | 0.841      | 0.143        | 0.005 (0.001)    | 0.346 (0.042)    | 0 (0.000) |     7.51 | br0, HexT, Jeorge, nitr0, oSee       |
|           18 |      321 | 2025-02-11 | BOSS              | W   | 0.834      | 0.143        | 0.005 (0.001)    | 0.343 (0.041)    | 0 (0.000) |     8.68 | br0, HexT, Jeorge, nitr0, oSee       |
|           17 |      327 | 2025-02-11 | Marsborne         | W   | 0.833      | 0.143        | -                | 0.199 (0.024)    | 0 (0.000) |     2.77 | br0, HexT, Jeorge, nitr0, oSee       |
|           16 |      837 | 2024-12-15 | Timbermen         | L   | 0.447      | -            | -                | -                | -         |   -10.95 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           15 |      842 | 2024-12-15 | Party Astronauts  | W   | 0.446      | 0.303        | 0.002 (0.000)    | 0.339 (0.046)    | 0 (0.000) |     2.51 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           14 |      955 | 2024-12-08 | Sharks Esports    | W   | 0.401      | 0.384        | 0.047 (0.007)    | 0.585 (0.090)    | 1 (0.401) |     6.09 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           13 |      958 | 2024-12-08 | Sharks Esports    | W   | 0.399      | 0.384        | 0.047 (0.007)    | 0.585 (0.090)    | 1 (0.399) |     6.21 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           12 |      973 | 2024-12-07 | BOSS              | W   | 0.394      | 0.384        | 0.005 (0.001)    | 0.343 (0.052)    | 1 (0.394) |     4.29 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           11 |      980 | 2024-12-07 | Undone            | W   | 0.393      | 0.384        | 0.002 (0.000)    | 0.200 (0.030)    | 1 (0.393) |     2.98 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           10 |     1006 | 2024-12-06 | Stand On Business | W   | 0.387      | -            | -                | -                | 1 (0.387) |     0.61 | Brehze, HexT, Jeorge, nitr0, oSee    |
|            9 |     1249 | 2024-11-24 | Nouns Esports     | L   | 0.307      | -            | -                | -                | -         |    -6.64 | Brehze, HexT, Jeorge, nitr0, oSee    |
|            8 |     1252 | 2024-11-24 | Timbermen         | W   | 0.306      | 0.303        | 0.009 (0.001)    | -                | -         |     2.11 | Brehze, HexT, Jeorge, nitr0, oSee    |
|            7 |     1271 | 2024-11-23 | Chill Guys        | W   | 0.300      | -            | -                | -                | -         |     1.22 | Brehze, HexT, Jeorge, nitr0, oSee    |
|            6 |     1841 | 2024-10-20 | M80               | L   | 0.073      | -            | -                | -                | -         |    -1.64 | autimatic, Brehze, HexT, nitr0, oSee |
|            5 |     1857 | 2024-10-19 | Legacy            | W   | 0.067      | 0.477        | 0.027 (0.001)    | 0.591 (0.019)    | -         |     0.68 | autimatic, Brehze, HexT, nitr0, oSee |
|            4 |     1871 | 2024-10-18 | Party Astronauts  | W   | 0.060      | -            | -                | -                | -         |     0.37 | autimatic, Brehze, HexT, nitr0, oSee |
|            3 |     1899 | 2024-10-17 | Wildcard          | W   | 0.053      | 0.477        | 0.189 (0.005)    | -                | -         |     1.45 | autimatic, Brehze, HexT, nitr0, oSee |
|            2 |     1921 | 2024-10-16 | M80               | L   | 0.047      | -            | -                | -                | -         |    -1.05 | autimatic, Brehze, HexT, nitr0, oSee |
|            1 |     1948 | 2024-10-15 | Party Astronauts  | W   | 0.040      | -            | -                | -                | -         |     0.25 | autimatic, Brehze, HexT, nitr0, oSee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,854.95)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.447 | $1,000.00      | $447.08         |
| 2024-12-08 |      0.401 | $15,000.00     | $6,009.38       |
| 2024-11-24 |      0.307 | $1,000.00      | $306.83         |
| 2024-10-20 |      0.073 | $15,000.00     | $1,091.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
