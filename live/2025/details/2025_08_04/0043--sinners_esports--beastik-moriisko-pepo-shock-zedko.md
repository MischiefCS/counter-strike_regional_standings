### Roster Details<br />
Team Name: SINNERS Esports<br />
Roster: beastik, MoriiSko, Pepo, SHOCK, ZEDKO<br />
Global Rank: [43](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [30]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  525.5<br />
<br />
Final Rank Value (525.5) = Starting Rank Value (526.5) + Head To Head Adjustments (-0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 526.5
- 400 + ( ( 0.048 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 526.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      207 | 2025-02-16 | ECSTATIC          | L   | 0.071      | -            | -                | -                | -         |    -1.12 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO |
|            4 |      250 | 2025-02-15 | Sashi Esport      | L   | 0.063      | -            | -                | -                | -         |    -0.95 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO |
|            3 |      312 | 2025-02-12 | ALASKA            | W   | 0.044      | 0.435        | 0.032 (0.001)    | 0.420 (0.008)    | 0 (0.000) |     1.37 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO |
|            2 |      399 | 2025-02-09 | Fire Flux Esports | L   | 0.025      | -            | -                | -                | -         |    -0.40 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO |
|            1 |      502 | 2025-02-07 | Monte             | W   | 0.010      | 0.435        | 0.000 (0.000)    | 0.230 (0.001)    | 0 (0.000) |     0.16 | beastik, MoriiSko, Pepo, SHOCK, ZEDKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
