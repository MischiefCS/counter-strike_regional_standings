### Roster Details<br />
Team Name: Reveal (German team)<br />
Roster: Askan, Cl34v3rs, hayanh, OneLion, Spexy<br />
Global Rank: [255](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [159]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  618.9<br />
<br />
Final Rank Value (618.9) = Starting Rank Value (621.7) + Head To Head Adjustments (-2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 621.7
- 400 + ( ( 0.113 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 621.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1974 | 2024-12-02 | Team Genesium       | L   | 0.607      | -            | -                | -                | -         |    -8.14 | Askan, Cl34v3rs, hayanh, OneLion, Spexy    |
|            9 |     2107 | 2024-11-30 | 52squad             | W   | 0.594      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.07 | Askan, Cl34v3rs, hayanh, OneLion, Spexy    |
|            8 |     2216 | 2024-11-28 | Dragon Esports Club | L   | 0.580      | -            | -                | -                | -         |    -7.71 | Askan, Cl34v3rs, OneLion, Spexy, Yoshireax |
|            7 |     2827 | 2024-11-11 | Permitta Esports    | W   | 0.467      | 0.143        | 0.013 (0.001)    | 0.275 (0.018)    | 0 (0.000) |     9.96 | Askan, Cl34v3rs, hayanh, OneLion, Spexy    |
|            6 |     2870 | 2024-11-10 | ALTERNATE aTTaX Evo | W   | 0.460      | 0.143        | 0.000 (0.000)    | 0.092 (0.006)    | 0 (0.000) |     7.01 | Askan, Cl34v3rs, hayanh, OneLion, Spexy    |
|            5 |     2919 | 2024-11-09 | AKA HERO            | W   | 0.453      | 0.143        | 0.000 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     6.33 | Askan, Cl34v3rs, hayanh, OneLion, Spexy    |
|            4 |     3127 | 2024-11-03 | Team Fragster       | L   | 0.413      | -            | -                | -                | -         |    -6.86 | Askan, Cl34v3rs, hayanh, OneLion, Spexy    |
|            3 |     3408 | 2024-10-27 | Wave Esports        | L   | 0.366      | -            | -                | -                | -         |    -5.99 | Askan, Cl34v3rs, hayanh, OneLion, Spexy    |
|            2 |     3438 | 2024-10-26 | MYinsanity          | W   | 0.359      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.02 | Askan, Cl34v3rs, hayanh, OneLion, Spexy    |
|            1 |     3447 | 2024-10-25 | Regnum4Games        | L   | 0.353      | -            | -                | -                | -         |    -5.55 | Askan, Cl34v3rs, hayanh, OneLion, Spexy    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($370.79)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-10 |      0.460 | $375.29        | $172.63         |
| 2024-10-27 |      0.367 | $539.99        | $198.16         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
